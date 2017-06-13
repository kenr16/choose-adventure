import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { routing } from './app.routing';
import { DoorComponent } from './door/door.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DoorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
