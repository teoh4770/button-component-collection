import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { VariantDirective } from './button-directives/variant.directive';
import { SizeDirective } from './button-directives/size.directive';
import { ColorDirective } from './button-directives/color.directive';
import { StartIconDirective } from './button-directives/start-icon.directive';
import { EndIconDirective } from './button-directives/end-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    VariantDirective,
    SizeDirective,
    ColorDirective,
    StartIconDirective,
    EndIconDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
