import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duo',
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.scss']
})
export class DuoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.childNodes.length < 1)
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
