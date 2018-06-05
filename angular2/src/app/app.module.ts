import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { FormsModule} from '@angular/forms'

import {AppProducts} from './products.component';
import {AppCategory} from './category.component';
import {MergePipe} from './merge.pipe';

import {RouterModule, Routes} from '@angular/router';

const appRouter : Routes = [
  { path : 'products' , component : AppProducts},
  {path : 'category' , component : AppCategory}
]


@NgModule({
  imports:      [ BrowserModule,HttpModule, RouterModule.forRoot(appRouter), FormsModule ],
  declarations: [ AppComponent, AppProducts, AppCategory, MergePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
