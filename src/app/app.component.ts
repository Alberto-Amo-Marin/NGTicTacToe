import { Component } from '@angular/core';
import UIkit from 'uikit';
import { HeaderService } from './header.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public headerService: HeaderService,
    public location: Location) { }

  goBack(): void {
    if (this.headerService.isAt('solo')) {
      console.log('estamos en solo');
      this.location.back();
    }

    if (this.headerService.isAt('duo')) {
      this.location.back();
    }
  }

}
