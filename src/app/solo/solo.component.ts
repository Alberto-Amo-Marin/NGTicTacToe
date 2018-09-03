import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { Location } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogService } from '../duo/dialog.service';
import { CoursedialogComponent } from '../duo/coursedialog/coursedialog.component';


@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.scss']
})
export class SoloComponent implements OnInit {

  public show1: boolean = true;
  public show2: boolean = true;
  public show3: boolean = true;

  public b1: boolean = false;
  public b2: boolean = false;
  public b3: boolean = false;
  public b4: boolean = false;
  public b5: boolean = false;
  public b6: boolean = false;
  public b7: boolean = false;
  public b8: boolean = false;
  public b9: boolean = false;

  constructor(private location: Location,
    private headerService: HeaderService, private dialogService: DialogService, public dialog: MatDialog) { }

  public vector = new Array<number>(10);
  public move: number = 0;
  public winner: boolean = false;
  public turn: number;
  public move_x: boolean;
  public move_y: boolean;

  ngOnInit() {
    this.turn = 1;
    this.move_x = true;
    this.move_y = false;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CoursedialogComponent, dialogConfig);
  }


  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.childNodes.length < 1) {
      ev.target.appendChild(document.getElementById(data));
      this.setVectorValues(ev.target.id, data);
      this.setValueO();
    }
  }

  drag(ev) {
    console.log('el turno vale', this.turn)
    if (this.turn % 2 == 0) {
      console.log('evento par');
      this.move_x = true;
      ev.dataTransfer.setData("text", ev.target.id);
      this.turn = this.turn + 1;
    }

    else {
      console.log('evento impar');
      this.move_x = false;
      ev.dataTransfer.setData("text", ev.target.id);
      this.turn = this.turn + 1;
    }
  }

  generateRandom(): number {
    return Math.floor(Math.random() * 9) + 1;
  }

  setValueO() {
    var number;
    number = this.generateRandom();
    console.log('el numero es: ', number);

    if (this.vector[number] == 1 || this.vector[number] == 2) {
      this.setValueO();
    }

    else {
      this.vector[number] = 2;

      switch (number) {
        case '1':
          this.b1 = true;

        case '2':
          this.b2 = true;

        case '3':
          this.b3 = true;

        case '4':
          this.b4 = true;

        case '5':
          this.b6 = true;

        case '6':
          this.b6 = true;

        case '7':
          this.b7 = true;

        case '8':
          this.b8 = true;

        case '9':
          this.b9 = true;

      }
    }

  }



  setVectorValues(id: string, data: string) {
    if (id == "b1") {

      if (data == "x1") {
        this.vector[1] = 1;
      }

      if (data == "x2") {
        this.vector[1] = 1;
      }

      if (data == "x3") {
        this.vector[1] = 1;
      }

      if (data == "o1") {
        this.vector[1] = 2;
      }

      if (data == "o2") {
        this.vector[1] = 2;
      }

      if (data == "o3") {
        this.vector[1] = 2;
      }


    }

    if (id == "b2") {
      if (data == "x1") {
        this.vector[2] = 1;
      }

      if (data == "x2") {
        this.vector[2] = 1;
      }

      if (data == "x3") {
        this.vector[2] = 1;
      }

      if (data == "o1") {
        this.vector[2] = 2;
      }

      if (data == "o2") {
        this.vector[2] = 2;
      }

      if (data == "o3") {
        this.vector[2] = 2;
      }

    }

    if (id == "b3") {
      if (data == "x1") {
        this.vector[3] = 1;
      }

      if (data == "x2") {
        this.vector[3] = 1;
      }

      if (data == "x3") {
        this.vector[3] = 1;
      }

      if (data == "o1") {
        this.vector[3] = 2;
      }

      if (data == "o2") {
        this.vector[3] = 2;
      }

      if (data == "o3") {
        this.vector[3] = 2;
      }

    }

    if (id == "b4") {
      if (data == "x1") {
        this.vector[4] = 1;
      }

      if (data == "x2") {
        this.vector[4] = 1;
      }

      if (data == "x3") {
        this.vector[4] = 1;
      }

      if (data == "o1") {
        this.vector[4] = 2;
      }

      if (data == "o2") {
        this.vector[4] = 2;
      }

      if (data == "o3") {
        this.vector[4] = 2;
      }

    }

    if (id == "b5") {
      if (data == "x1") {
        this.vector[5] = 1;
      }

      if (data == "x2") {
        this.vector[5] = 1;
      }

      if (data == "x3") {
        this.vector[5] = 1;
      }

      if (data == "o1") {
        this.vector[5] = 2;
      }

      if (data == "o2") {
        this.vector[5] = 2;
      }

      if (data == "o3") {
        this.vector[5] = 2;
      }

    }

    if (id == "b6") {
      if (data == "x1") {
        this.vector[6] = 1;
      }

      if (data == "x2") {
        this.vector[6] = 1;
      }

      if (data == "x3") {
        this.vector[6] = 1;
      }

      if (data == "o1") {
        this.vector[6] = 2;
      }

      if (data == "o2") {
        this.vector[6] = 2;
      }

      if (data == "o3") {
        this.vector[6] = 2;
      }

    }

    if (id == "b7") {
      if (data == "x1") {
        this.vector[7] = 1;
      }

      if (data == "x2") {
        this.vector[7] = 1;
      }

      if (data == "x3") {
        this.vector[7] = 1;
      }

      if (data == "o1") {
        this.vector[7] = 2;
      }

      if (data == "o2") {
        this.vector[7] = 2;
      }

      if (data == "o3") {
        this.vector[7] = 2;
      }

    }

    if (id == "b8") {
      if (data == "x1") {
        this.vector[8] = 1;
      }

      if (data == "x2") {
        this.vector[8] = 1;
      }

      if (data == "x3") {
        this.vector[8] = 1;
      }

      if (data == "o1") {
        this.vector[8] = 2;
      }

      if (data == "o2") {
        this.vector[8] = 2;
      }

      if (data == "o3") {
        this.vector[8] = 2;
      }

    }

    if (id == "b9") {
      if (data == "x1") {
        this.vector[9] = 1;
      }

      if (data == "x2") {
        this.vector[9] = 1;
      }

      if (data == "x3") {
        this.vector[9] = 1;
      }

      if (data == "o1") {
        this.vector[9] = 2;
      }

      if (data == "o2") {
        this.vector[9] = 2;
      }

      if (data == "o3") {
        this.vector[9] = 2;
      }
    }

    this.checkWin();
  }

  checkWin() {
    //Use cases of winner for X player
    if (this.vector[1] == 1 && this.vector[2] == 1 && this.vector[3] == 1) {
      console.log('ganan x fila1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1');
      this.openDialog();
    }

    if (this.vector[4] == 1 && this.vector[5] == 1 && this.vector[6] == 1) {
      console.log('ganan x fila2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }

    if (this.vector[7] == 1 && this.vector[8] == 1 && this.vector[9] == 1) {
      console.log('ganan x fila3');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }

    if (this.vector[1] == 1 && this.vector[4] == 1 && this.vector[7] == 1) {
      console.log('ganan x col1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }

    if (this.vector[2] == 1 && this.vector[5] == 1 && this.vector[8] == 1) {
      console.log('ganan x col2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }

    if (this.vector[3] == 1 && this.vector[6] == 1 && this.vector[9] == 1) {
      console.log('ganan x col3');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }

    if (this.vector[1] == 1 && this.vector[5] == 1 && this.vector[9] == 1) {
      console.log('ganan x diag1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1');
      this.openDialog();
    }

    if (this.vector[3] == 1 && this.vector[5] == 1 && this.vector[7] == 1) {
      console.log('ganan x diag2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 1')
      this.openDialog();
    }


    //Use cases of winner for O player
    if (this.vector[1] == 2 && this.vector[2] == 2 && this.vector[3] == 2) {
      console.log('ganan o fila1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[4] == 2 && this.vector[5] == 2 && this.vector[6] == 2) {
      console.log('ganan o fila2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[7] == 2 && this.vector[8] == 2 && this.vector[9] == 2) {
      console.log('ganan o fila3');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[1] == 2 && this.vector[4] == 2 && this.vector[7] == 2) {
      console.log('ganan o col1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[2] == 2 && this.vector[5] == 2 && this.vector[8] == 2) {
      console.log('ganan o col2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[3] == 2 && this.vector[6] == 2 && this.vector[9] == 2) {
      console.log('ganan o col3');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[1] == 2 && this.vector[5] == 2 && this.vector[9] == 2) {
      console.log('ganan o diag1');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }

    if (this.vector[3] == 2 && this.vector[5] == 2 && this.vector[7] == 2) {
      console.log('ganan o diag2');
      this.winner = true;
      //this.reset();
      this.dialogService.setWinner(' Player 2')
      this.openDialog();
    }
  }

  reset() {
    location.reload();

  }

  allowDrop(ev) {
    ev.preventDefault();
  }



}
