import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-duo',
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.scss']
})
export class DuoComponent implements OnInit {

  constructor(private location: Location) { }
  
  public vector = new Array<number>(10);
  public move: number = 0;

  ngOnInit() {
  }


  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.childNodes.length < 1) {
      ev.target.appendChild(document.getElementById(data));
      this.setVectorValues(ev.target.id, data);
    }
  }

  setVectorValues(id: string, data: string) {
    if (id == "b1") {

      if(data == "x1") {
        this.vector[1] = 1;
      }

      if(data == "x2") {
        this.vector[1] = 1;
      }

      if(data == "x3") {
        this.vector[1] = 1;
      }

      if(data == "o1") {
        this.vector[1] = 2;
      }

      if(data == "o2") {
        this.vector[1] = 2;
      }

      if(data == "o3") {
        this.vector[1] = 2;
      }


    }

    if (id == "b2") {
      if(data == "x1") {
        this.vector[2] = 1;
      }

      if(data == "x2") {
        this.vector[2] = 1;
      }

      if(data == "x3") {
        this.vector[2] = 1;
      }

      if(data == "o1") {
        this.vector[2] = 2;
      }

      if(data == "o2") {
        this.vector[2] = 2;
      }

      if(data == "o3") {
        this.vector[2] = 2;
      }
      
    }

    if (id == "b3") {
      if(data == "x1") {
        this.vector[3] = 1;
      }

      if(data == "x2") {
        this.vector[3] = 1;
      }

      if(data == "x3") {
        this.vector[3] = 1;
      }

      if(data == "o1") {
        this.vector[3] = 2;
      }

      if(data == "o2") {
        this.vector[3] = 2;
      }

      if(data == "o3") {
        this.vector[3] = 2;
      }
      
    }

    if (id == "b4") {
      if(data == "x1") {
        this.vector[4] = 1;
      }

      if(data == "x2") {
        this.vector[4] = 1;
      }

      if(data == "x3") {
        this.vector[4] = 1;
      }

      if(data == "o1") {
        this.vector[4] = 2;
      }

      if(data == "o2") {
        this.vector[4] = 2;
      }

      if(data == "o3") {
        this.vector[4] = 2;
      }

    }

    if (id == "b5") {
      if(data == "x1") {
        this.vector[5] = 1;
      }

      if(data == "x2") {
        this.vector[5] = 1;
      }

      if(data == "x3") {
        this.vector[5] = 1;
      }

      if(data == "o1") {
        this.vector[5] = 2;
      }

      if(data == "o2") {
        this.vector[5] = 2;
      }

      if(data == "o3") {
        this.vector[5] = 2;
      }

    }

    if (id == "b6") {
      if(data == "x1") {
        this.vector[6] = 1;
      }

      if(data == "x2") {
        this.vector[6] = 1;
      }

      if(data == "x3") {
        this.vector[6] = 1;
      }

      if(data == "o1") {
        this.vector[6] = 2;
      }

      if(data == "o2") {
        this.vector[6] = 2;
      }

      if(data == "o3") {
        this.vector[6] = 2;
      }

    }

    if (id == "b7") {
      if(data == "x1") {
        this.vector[7] = 1;
      }

      if(data == "x2") {
        this.vector[7] = 1;
      }

      if(data == "x3") {
        this.vector[7] = 1;
      }

      if(data == "o1") {
        this.vector[7] = 2;
      }

      if(data == "o2") {
        this.vector[7] = 2;
      }

      if(data == "o3") {
        this.vector[7] = 2;
      }

    }

    if (id == "b8") {
      if(data == "x1") {
        this.vector[8] = 1;
      }

      if(data == "x2") {
        this.vector[8] = 1;
      }

      if(data == "x3") {
        this.vector[8] = 1;
      }

      if(data == "o1") {
        this.vector[8] = 2;
      }

      if(data == "o2") {
        this.vector[8] = 2;
      }

      if(data == "o3") {
        this.vector[8] = 2;
      }

    }

    if (id == "b9") {
      if(data == "x1") {
        this.vector[9] = 1;
      }

      if(data == "x2") {
        this.vector[9] = 1;
      }

      if(data == "x3") {
        this.vector[9] = 1;
      }

      if(data == "o1") {
        this.vector[9] = 2;
      }

      if(data == "o2") {
        this.vector[9] = 2;
      }

      if(data == "o3") {
        this.vector[9] = 2;
      }
    }

    this.checkWin();
  }

  checkWin() {
    //Use cases of winner for X player
    if(this.vector[1] == 1 && this.vector[2] == 1 && this.vector[3] == 1) {
      console.log('ganan x fila1');
      this.reset();
    }

    if(this.vector[4] == 1 && this.vector[5] == 1 && this.vector[6] == 1) {
      console.log('ganan x fila2');
    }

    if(this.vector[7] == 1 && this.vector[8] == 1 && this.vector[9] == 1) {
      console.log('ganan x fila3');
    }

    if(this.vector[1] == 1 && this.vector[4] == 1 && this.vector[7] == 1) {
      console.log('ganan x col1');
    }

    if(this.vector[2] == 1 && this.vector[5] == 1 && this.vector[8] == 1) {
      console.log('ganan x col2');
    }

    if(this.vector[3] == 1 && this.vector[6] == 1 && this.vector[9] == 1) {
      console.log('ganan x col3');
    }

    if(this.vector[1] == 1 && this.vector[5] == 1 && this.vector[9] == 1) {
      console.log('ganan x diag1');
    }

    if(this.vector[3] == 1 && this.vector[5] == 1 && this.vector[7] == 1) {
      console.log('ganan x diag2');
    }


    //Use cases of winner for O player
    if(this.vector[1] == 2 && this.vector[2] == 2 && this.vector[3] == 2) {
      console.log('ganan o fila1');
    }

    if(this.vector[4] == 2 && this.vector[5] == 2 && this.vector[6] == 2) {
      console.log('ganan o fila2');
    }

    if(this.vector[7] == 2 && this.vector[8] == 2 && this.vector[9] == 2) {
      console.log('ganan o fila3');
    }

    if(this.vector[1] == 2 && this.vector[4] == 2 && this.vector[7] == 2) {
      console.log('ganan o col1');
    }

    if(this.vector[2] == 2 && this.vector[5] == 2 && this.vector[8] == 2) {
      console.log('ganan o col2');
    }

    if(this.vector[3] == 2 && this.vector[6] == 2 && this.vector[9] == 2) {
      console.log('ganan o col3');
    }

    if(this.vector[1] == 2 && this.vector[5] == 2 && this.vector[9] == 2) {
      console.log('ganan o diag1');
    }

    if(this.vector[3] == 2 && this.vector[5] == 2 && this.vector[7] == 2) {
      console.log('ganan o diag2');
    }
  }

  reset() {
    location.reload();

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
