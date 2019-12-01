import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './aanmelding/login/login.component';
import { RegistratieComponent } from './aanmelding/registratie/registratie.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AanmeldingModule } from './aanmelding/aanmelding.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { VriendModule } from './vriend/vriend.module';
import { VriendComponent } from './vriend/vriend/vriend.component';
import { ToevoegenPollComponent } from './dashboard/toevoegen-poll/toevoegen-poll.component';
import { VriendenUitnodigenComponent } from './dashboard/vrienden-uitnodigen/vrienden-uitnodigen.component';
import { PollsComponent } from './dashboard/polls/polls.component';
import { EigenPollsComponent } from './dashboard/eigen-polls/eigen-polls.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vrienden', component: VriendComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registratie', component: RegistratieComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pollToevoegen', component: ToevoegenPollComponent},
  { path: 'vriendenToevoegen', component: VriendenUitnodigenComponent},
  { path: 'polls', component: PollsComponent},
  { path: 'eigenPolls', component: EigenPollsComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AanmeldingModule,
    DashboardModule,
    HomeModule,
    VriendModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   
}
