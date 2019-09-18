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

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      InputComponent,
      DetailsComponent,
      OutputComponent,
      EditComponent
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
