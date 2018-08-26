import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.css']
})
export class SoloComponent implements OnInit {

  constructor(private location: Location,
  private headerService: HeaderService) { }

  ngOnInit() {
  }

}
