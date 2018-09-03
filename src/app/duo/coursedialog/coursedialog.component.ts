import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DialogService } from '../dialog.service';
import { ResetService } from '../../reset.service';

@Component({
  selector: 'app-coursedialog',
  templateUrl: './coursedialog.component.html',
  styleUrls: ['./coursedialog.component.css']
})
export class CoursedialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CoursedialogComponent>, private dialogService: DialogService, private resetService: ResetService) { }

  public winner: string;

  ngOnInit() {
    this.winner = this.dialogService.getWinner();
  }



  close() {
    this.dialogRef.close();
    location.reload();
  }

}
