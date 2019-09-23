import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgaftercontentComponent } from './ngaftercontent/ngaftercontent.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'cycle', component: LifeCycleComponent },
  { path: 'content', component: NgcontentComponent },
  { path: 'after-content', component: NgaftercontentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
