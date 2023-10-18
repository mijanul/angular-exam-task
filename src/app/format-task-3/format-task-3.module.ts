import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatTask3RoutingModule } from './format-task-3-routing.module';
import { FormatSpacesComponent } from './format-spaces/format-spaces.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatSpacePipe } from '../_pipes/formatSpace.pipes';

@NgModule({
  declarations: [FormatSpacesComponent, FormatSpacePipe],
  imports: [CommonModule, FormatTask3RoutingModule, ReactiveFormsModule],
})
export class FormatTask3Module {}
