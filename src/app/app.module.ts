import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { InputComponent } from './input/input.component';
import { DetailsComponent } from './input/details/details.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      InputComponent,
      DetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
