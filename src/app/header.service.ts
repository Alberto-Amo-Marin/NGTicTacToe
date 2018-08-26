import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private router: Router) { }

  isAt(path: string): boolean {
    return this.router.url.includes(path);
  }
}
