import { Component, OnInit } from '@angular/core';
import { NavigationService } from './navigation.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  menu: any[]=[];
  nav={
    title: '',
    path: ''
  };
  nav2='';
  displayMenu = true;
  //admin= JSON.parse(localStorage.getItem('user') || "");
  admin={firstname: "user", lastname: "user"}

  constructor(private navService: NavigationService, private authService: AuthService, private router: Router) {
    this.menu = navService.items;
  }

  ngOnInit(): void {
    var itemsNav= this.navService.items;
    let findit = false;

    itemsNav.forEach(item=>{
      if(findit == false){
        if(item.type=="link" && item.path==this.router.url){
          this.nav.title = item.title;
          this.nav.path = item.url;
          findit = true;
        }else{
          if(item.children){
            item.children.forEach((child: any) => {
              if(child.path == this.router.url){
                findit=true;
                this.nav.title = item.title;
                this.nav2 = child.title;
              }
            });
          }
        }
      }
    })
  }

  toggleNav(item: any){
    this.menu.forEach(element=>{
      if(element != item) element.active =false;
    });
    item.active = !item.active;
  }

  generateBreadcumb(item: any, child?: any){
    if(child){
      this.nav={
        title: item.title,
        path: ''
      };
      this.nav2=child.title;
    }else{
      this.nav={
        title: item.title,
        path: item.path
      };
      this.nav2='';
    }
  }

  toggleMenu(){
    this.displayMenu = !this.displayMenu;
  }

  logout(){
    this.authService.logout();
  }

}
