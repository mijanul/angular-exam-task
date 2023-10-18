import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertTask4RoutingModule } from './alert-task-4-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [CommonModule, AlertTask4RoutingModule],
})
export class AlertTask4Module {}
