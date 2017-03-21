import { Config } from './../shared/config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  callbackUrl: String;

  constructor() {
    this.callbackUrl = Config.url;
   }

  ngOnInit() {
  }

  sendForm(f) {
    console.log(f);
  }

}
