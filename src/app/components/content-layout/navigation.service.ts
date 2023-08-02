import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public items: any[] = [];
  constructor() {
    this.items=[
      {path:'/dashboard/default', title: 'Dashboard', icon:'bi-house-door', type:'link', active:false},
      {path:'/articles/list', title: 'Articles', icon:'bi-postcard', type:'link', active:false},
      {path:'/file-manager/files', title: 'Files', icon:'bi-filetype-docx', type:'link', active:false},
      
      /*{title: 'Commandes', icon:'bi-table', type:'sub', active: false, children: [
        {path:'/orders/list', title:'Liste des commandes', icon: 'bi-card-list', type:'link', active:false},
        {path:'/orders/refunds-list', title:'Liste des retours', icon: 'bi-card-list', type:'link', active:false}
      ]},*/
    ]
  }
}
