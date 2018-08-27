import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  public value: string;

  setWinner(value: string) {
    this.value = value;
  }

  getWinner(): string {
    return this.value;
  }
}
