import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupTask2RoutingModule } from './signup-task-2-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupTask2RoutingModule, ReactiveFormsModule],
})
export class SignupTask2Module {}
