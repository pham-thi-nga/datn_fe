import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/model/account';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  show = true
  data:any = Account||null;
  constructor(private account: AccountService, public router: Router) {
  }

  ngOnInit(): void {
    this.getAllAccount();
  }
  getAllAccount()  {
    this.account.getAllAccount(0, 9).subscribe((res: any) => {
      this.data = res.pageResponse;
      // console.log(res.pageRespone)
      console.log(res.pageResponse);

      this.show = false
    });
  }

  delete(id) {
    this.account.delete(id).subscribe((res) => {
      if (res) {
        console.log("Xóa thành công")
        this.getAllAccount()
      } else {
        console.log("Xóa thất bại")
      }
    })
  }

}
