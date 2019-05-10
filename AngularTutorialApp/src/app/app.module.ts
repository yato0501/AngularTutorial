import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CurrentRoutesComponent } from './current-routes/current-routes.component';
import { ButtonComponent } from './shared/button/button.component';
import { GetProviderComponent } from './get-provider/get-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentRoutesComponent,
    ButtonComponent,
    GetProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
