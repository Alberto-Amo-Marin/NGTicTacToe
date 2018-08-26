import { Component } from '@angular/core';
import UIkit from 'uikit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}
