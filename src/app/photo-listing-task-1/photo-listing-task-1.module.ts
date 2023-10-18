import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListingTask1RoutingModule } from './photo-listing-task-1-routing.module';
import { PhotoListingComponent } from './photo-listing/photo-listing.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PhotoListingComponent],
  imports: [CommonModule, PhotoListingTask1RoutingModule, MatCardModule],
})
export class PhotoListingTask1Module {}
