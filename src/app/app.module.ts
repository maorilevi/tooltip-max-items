import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HeaderComponent } from './tooltip/header/header.component';
import { FooterComponent } from './tooltip/footer/footer.component';
import { ItemComponent } from './tooltip/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TooltipComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
