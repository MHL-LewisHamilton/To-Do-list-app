import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Overview } from './pages/overview/overview';

export const routes: Routes = [

    { path: 'overview', component: Overview },

      { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







