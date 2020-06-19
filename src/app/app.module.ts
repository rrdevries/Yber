import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RidesComponent } from './rides/rides.component';
import { RideListComponent } from './rides/ride-list/ride-list.component';
import { RideItemComponent } from './rides/ride-list/ride-item/ride-item.component';
import { RideDetailComponent } from './rides/ride-detail/ride-detail.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationEditComponent } from './location-list/location-edit/location-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RidesComponent,
    RideListComponent,
    RideItemComponent,
    RideDetailComponent,
    LocationListComponent,
    LocationEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
