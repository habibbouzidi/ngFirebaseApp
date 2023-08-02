import { Routes } from "@angular/router";

export const content: Routes = [
    {path: 'dashboard', loadChildren: ()=> import('../dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path: 'articles', loadChildren: ()=> import('../article/article.module').then(m=>m.ArticleModule)},
    {path: 'file-manager', loadChildren: ()=> import('../file-manager/file-manager.module').then(m=>m.FileManagerModule)},
];