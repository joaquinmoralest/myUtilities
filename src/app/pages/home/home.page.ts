import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageTitle = 'My Utilities';
  public loading: boolean;
  logomu: any;
  constructor() {
     this.loading = true;
  }
  ngOnInit() {
           
  }
}