import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FileManagerModule { }
