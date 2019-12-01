import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { ToevoegenPollComponent } from './toevoegen-poll/toevoegen-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VriendenUitnodigenComponent } from './vrienden-uitnodigen/vrienden-uitnodigen.component';
import { PollsComponent } from './polls/polls.component';
import { ResultatenComponent } from './resultaten/resultaten.component';

@NgModule({
  declarations: [DashboardComponent, ToevoegenPollComponent, VriendenUitnodigenComponent, PollsComponent, ResultatenComponent],
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
    PollsComponent,
    ResultatenComponent
  ]
})
export class DashboardModule { }
