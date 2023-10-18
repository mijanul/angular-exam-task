import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormatSpacesComponent } from './format-spaces/format-spaces.component';

const routes: Routes = [
  {
    path: '',
    component: FormatSpacesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatTask3RoutingModule {}
