import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HaderComponent } from './tooltip/hader/hader.component';
import { HeaderComponent } from './tooltip/header/header.component';
import { ContentComponent } from './tooltip/content/content.component';
import { FooterComponent } from './tooltip/footer/footer.component';
import { ListComponent } from './tooltip/content/list/list.component';
import { ItemComponent } from './tooltip/content/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    HaderComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListComponent,
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
