import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { ToevoegenPollComponent } from './toevoegen-poll/toevoegen-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VriendenUitnodigenComponent } from './vrienden-uitnodigen/vrienden-uitnodigen.component';
import { EigenPollsComponent } from './eigen-polls/eigen-polls.component';
import { PollsComponent } from './polls/polls.component';

@NgModule({
  declarations: [DashboardComponent, ToevoegenPollComponent, VriendenUitnodigenComponent, EigenPollsComponent, PollsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent,
    ToevoegenPollComponent,
    EigenPollsComponent,
    PollsComponent
  ]
})
export class DashboardModule { }
