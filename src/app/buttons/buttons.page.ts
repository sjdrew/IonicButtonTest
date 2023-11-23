import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

    public ready = false;
  constructor() { }

  ngOnInit() {
    setTimeout( () =>{ this.ready=true},500)
  }

}
