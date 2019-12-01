import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistratieComponent } from './registratie/registratie.component';
import { AanmeldingService } from './aanmelding.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegistratieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AanmeldingService
  ],
  exports: [
    LoginComponent,
    RegistratieComponent,
  ]
})
export class AanmeldingModule { }
