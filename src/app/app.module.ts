import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenudataService } from './menudata.service';
import { BodyComponent } from './body/body.component';
import { BodydataService } from './bodydata.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MenudataService, BodydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
