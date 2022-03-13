import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PBICircleComponent} from "./pbicircle/pbicircle.component";
import {TreeViewComponent} from './tree-view/tree-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PBICircleComponent,
    TreeViewComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
