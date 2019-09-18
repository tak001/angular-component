import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component';

const routes: Routes = [
  { path: 'input', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
