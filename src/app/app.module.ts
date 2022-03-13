import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PBICircleComponent} from "./pbicircle/pbicircle.component";
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {TreeViewComponent} from './tree-view/tree-view.component';

// import { TreeBubblesComponent } from './tree-bubbles/tree-bubbles.component';

@NgModule({
  declarations: [
    AppComponent,
    PBICircleComponent,
    TreeViewComponent,
    // TreeBubblesComponent
  ],
  imports: [
    BrowserModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
