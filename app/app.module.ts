import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ProductsComponent } from './components/products/products.component';
import { GridModule } from '@progress/kendo-angular-grid';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DropDownsModule,
    AppRoutingModule,
    NavigationModule,
    CommonModule,
    LabelModule,
    DateInputsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
