import { Component, OnInit } from '@angular/core';
import { fadeInOut } from './animations';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeInOut]
})
export class ModalComponent implements OnInit {
  loginTabActive = true;

  constructor( ) { }

  ngOnInit() {
  }

  setLoginActive(loginActive: boolean) {
     this.loginTabActive = loginActive;
  }



}
