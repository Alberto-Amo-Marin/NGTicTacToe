import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';
import { SoloComponent } from './solo/solo.component';
import { DuoComponent } from './duo/duo.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderService } from './header.service';
import { RouterModule } from '@angular/router';

import {Location} from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import { CoursedialogComponent } from './duo/coursedialog/coursedialog.component';
import { MatDividerModule, MatCardModule } from '@angular/material';
import { ResetService } from './reset.service';



@NgModule({
  exports: [MatDialogModule],

  declarations: [
    AppComponent,
    SoloComponent,
    DuoComponent,
    HomeComponent,
    CoursedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [HeaderService, ResetService],
  bootstrap: [AppComponent],
  entryComponents: [CoursedialogComponent]
})
export class AppModule { }
