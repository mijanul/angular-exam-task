import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListingComponent } from './photo-listing/photo-listing.component';

const routes: Routes = [{ path: '', component: PhotoListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoListingTask1RoutingModule {}
