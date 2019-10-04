import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { LocationdisplayComponent } from './locationdisplay/locationdisplay.component';
import { routing } from './app.routing';
import { EditdisplayComponent } from './locationdisplay/editdisplay/editdisplay.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationdisplayComponent,

    EditdisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
