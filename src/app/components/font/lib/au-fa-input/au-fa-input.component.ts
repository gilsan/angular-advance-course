import { Component, OnInit, Input, Output, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
   @ContentChild(InputRefDirective) input: InputRefDirective;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
     console.log('input: ', this.input);
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }
  get classes() {
    const cssClasses = {

    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
