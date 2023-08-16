import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menuList: Array<any> = new Array<any>();
  constructor(
    private router: Router,
    private toastService: ToastrService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.listAllMenu();
  }

  onNewAdd() {
    this.router.navigate(['feature-modules/menu']);
  }
  onAddMenuCredentials(){
    this.router.navigate(['feature-modules/menu-credentials'])
  }
  listAllMenu(){
    this.sharedService.listAllMenu().subscribe({
      next:(res:any)=>{
        console.log("menu response", res)
        this.menuList = res?.menus
      }
    })

  }
}
