import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PBICircleComponent} from "./pbicircle/pbicircle.component";
import {TreeViewComponent} from './tree-view/tree-view.component';
import {WrappedLinesComponent} from './wrapped-lines/wrapped-lines.component';


@NgModule({
  declarations: [
    AppComponent,
    PBICircleComponent,
    TreeViewComponent,
    WrappedLinesComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
