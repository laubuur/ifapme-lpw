import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  mail = "marc@gmail.com";

  constructor() { }

  updateMail(value: string) {
    this.mail = value;
  }
}
