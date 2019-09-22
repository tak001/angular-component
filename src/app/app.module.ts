import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { InputComponent } from './input/input.component';
import { DetailsComponent } from './input/details/details.component';
import { OutputComponent } from './output/output.component';
import { EditComponent } from './output/edit/edit.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { AfterViewComponent } from './life-cycle/after-view/after-view.component';
import { AfterChildComponent } from './life-cycle/after-view/after-child/after-child.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ContentChildComponent } from './ngcontent/content-child/content-child.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      InputComponent,
      DetailsComponent,
      OutputComponent,
      EditComponent,
      LifeCycleComponent,
      ChildComponent,
      AfterViewComponent,
      AfterChildComponent,
      NgcontentComponent,
      ContentChildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
