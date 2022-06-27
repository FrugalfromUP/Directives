import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverDirective } from './Directives/hover.directive';
import { CustomDirective } from './Directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
