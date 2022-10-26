import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { MaterializeComponent } from './materialize/materialize.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    TailwindComponent,
    MaterializeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
