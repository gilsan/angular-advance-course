import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent implements OnInit {

  @Input() title: string;
  @Input() selected = false;


  constructor() { }

  ngOnInit() {
    console.log('au-tab:', this.selected);
  }

}
