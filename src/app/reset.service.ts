import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  
  private finish: boolean = false;
  constructor() { }

  setReset (finish: boolean) {
    this.finish = finish;
  }

  getReset () : boolean {
    return this.finish
  }
}
