import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneMainComponent } from './phone-main/phone-main.component';
import {LayoutComponent} from './ui/layout/layout.component';
import {FooterComponent} from './ui/footer/footer.component';
import {HeaderComponent} from './ui/header/header.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMainComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    AlertComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
