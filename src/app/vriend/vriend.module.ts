import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendComponent } from './vriend/vriend.component';
import { VriendService } from './vriend.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VriendComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VriendService
  ],
  exports: [
    VriendComponent
  ]
})
export class VriendModule { }
