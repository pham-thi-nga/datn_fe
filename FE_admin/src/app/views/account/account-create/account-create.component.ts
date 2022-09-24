import { UserService } from './../../../services/user.service';
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
  showPass: boolean = false;
  id: any;
  show: any;
  role:any;
  data = new Account;
  accountForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    role:new FormControl(''),
    password: new FormControl('')
  })
  constructor(public router: Router, private activeRoute: ActivatedRoute, private account: AccountService,private user: UserService) {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id != null) {
      this.show = true
      console.log(this.id);
    }
    this.getDetail()
    this.getAllRole()
  }

  ngOnInit(): void {
  }
  reset() {
    this.accountForm.reset( )
  }
  password() {
    this.showPass = !this.showPass;
}
  onSubmit() {
    // console.log(this.accountForm.value);
    this.show = true
    try {
      let body = {
        id: this.id,
        status: this.data.active == "true" ? true : false,
        name: this.accountForm.get("name").value == "" ? this.data : this.accountForm.get("name").value,
        email: this.accountForm.get("email").value == "" ? this.data.email : this.accountForm.get("email").value,
        phone: this.accountForm.get("phone").value == "" ? this.data.phone : this.accountForm.get("phone").value,
        // birthday: this.accountForm.get("birthday").value == "" ? this.data : this.accountForm.get("birthday").value,

      }
      console.log("Quyền",this.accountForm.get('role').value)
      console.log("body", body)
      // if (this.id == null || this.id == "") {
      //   this.account.createAccount(body).subscribe((res) => {
      //     if (res) {
      //       console.log("Thêm mới thành công")
      //       this.router.navigate(['account']);
      //     } else {
      //       console.log("Thêm mới thất bại")
      //     }
      //   })
      // } else {
      //   this.account.updateAccount(this.id, body).subscribe((res) => {
      //     if (res) {
      //       console.log("Cập nhật thành công")
      //       this.router.navigate(['account']);

      //     } else {
      //       console.log("Cập nhật thất bại")
      //     }
      //   })
      // }
    } catch (error) {
      console.log("Thất bại", error)
    } finally {
      this.show = false

    }
  }

  getAllRole(){
    this.user.getAllRole().subscribe((res:any)=>{
      this.role=res.pageResponse;
    })
  }
  getDetail() {
    this.account.getDetail(this.id).subscribe((res: any) => {
      this.data = res;
      console.log("Ở đây", this.data)
      this.show = false
    })
  }
}
