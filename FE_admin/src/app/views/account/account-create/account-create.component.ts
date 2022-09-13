import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  id: any;
  show: any;
  data = new Account;
  accountForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    birthday: new FormControl(''),
    password: new FormControl('')
  })
  constructor(public router: Router, private activeRoute: ActivatedRoute, private account: AccountService) {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id != null) {
      this.show = true
    }
    this.getDetail()
  }

  ngOnInit(): void {
  }
  reset() {
    this.accountForm.reset( )
  }
  onSubmit() {
    console.log(this.accountForm.value);
    this.show = true
    try {
      let body = {
        id: this.id,
        active: this.data.active == "true" ? true : false,
        name: this.accountForm.get("name").value == "" ? this.data.name : this.accountForm.get("name").value,
        email: this.accountForm.get("email").value == "" ? this.data.email : this.accountForm.get("email").value,
        phone: this.accountForm.get("phone").value == "" ? this.data.phone : this.accountForm.get("phone").value,
        birthday: this.accountForm.get("birthday").value == "" ? this.data.birthday : this.accountForm.get("birthday").value
      }
      console.log("body", body)
      if (this.id == null || this.id == "") {
        this.account.createAccount(body).subscribe((res) => {
          if (res) {
            console.log("Thêm mới thành công")
            this.router.navigate(['account']);
          } else {
            console.log("Thêm mới thất bại")
          }
        })
      } else {
        this.account.updateAccount(this.id, body).subscribe((res) => {
          if (res) {
            console.log("Cập nhật thành công")
            this.router.navigate(['account']);

          } else {
            console.log("Cập nhật thất bại")
          }
        })
      }
    } catch (error) {
      console.log("Thất bại", error)
    } finally {
      this.show = false

    }
  }
  getDetail() {
    this.account.getDetail(this.id).subscribe((res: any) => {
      this.data = res;
      console.log("Ở đây", this.data.name)
      this.show = false
    })
  }
}
