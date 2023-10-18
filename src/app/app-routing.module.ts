import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from './_constants/routingConstants';

const routes: Routes = [
  {
    path: '',
    redirectTo: PATH.MODULE.SIGNUP,
    pathMatch: 'full',
  },
  {
    path: PATH.MODULE.PHOTO,
    loadChildren: () =>
      import('./photo-listing-task-1/photo-listing-task-1.module').then(
        (m) => m.PhotoListingTask1Module
      ),
  },
  {
    path: PATH.MODULE.SIGNUP,
    loadChildren: () =>
      import('./signup-task-2/signup-task-2.module').then(
        (m) => m.SignupTask2Module
      ),
  },
  {
    path: PATH.MODULE.FORMAT,
    loadChildren: () =>
      import('./format-task-3/format-task-3.module').then(
        (m) => m.FormatTask3Module
      ),
  },
  {
    path: PATH.MODULE.ALERT,
    loadChildren: () =>
      import('./alert-task-4/alert-task-4.module').then(
        (m) => m.AlertTask4Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
