import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import * as includes from 'lodash.includes';
import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';

import { SPECIAL_CHARACTERS, BACKSPACE, DELETE,
LEFT_ARROW, RIGHT_ARROW, TAB, overWriteCharAtPosition } from './mask.utils';
import { maskDigitValidators, neverValidator } from './digit_validators';

@Directive({
  selector: '[appAumask]'
})
export class AuMaskDirective implements OnInit {

  @Input('appAumask') aumask: string = '';
  input: HTMLInputElement;
  fullFieldSelected = false;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit() {
    this.input.value = this.buildPlaceHolder();
  }

 @HostListener('select')
 onSelect($event: UIEvent) {

 }
 @HostListener('keydown', ['$event', '$event.keyCode'])
 onKeyDown($event: KeyboardEvent, keyCode) {
  if (keyCode !== TAB) {
    $event.preventDefault();
  }
   const key = String.fromCharCode(keyCode);
   const cursorPos = this.input.selectionStart;

  switch (keyCode) {
    case LEFT_ARROW:
      this.handleLeftArrow(cursorPos);
      return ;
    case RIGHT_ARROW:
         this.handleRightArrow(cursorPos);
         return ;
    case BACKSPACE:
        this.handleBackspace(cursorPos);
        return;
    case DELETE:
       this.handleDelete(cursorPos);
       return;
  }

  const maskDigit = this.aumask.charAt(cursorPos);
  const digitValidator = maskDigitValidators[maskDigit] || neverValidator;
  if (digitValidator(key)) {
     overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
  }

 }

 handleRightArrow(cursorPos) {

  const valueAfterCursor = this.input.value.slice(cursorPos + 1);
  const nextPos = findIndex(valueAfterCursor,
        char =>  !includes(SPECIAL_CHARACTERS , char));
  if (nextPos >= 0 ) {
    const newCursorPos = cursorPos + nextPos + 1;

    this.input.setSelectionRange(newCursorPos, newCursorPos);
  }
 }

 handleBackspace(cursorPos) {
  const previousPos = this.calculatePreviousCursorPos(cursorPos);
  if (previousPos >= 0 ) {
    this.input.setSelectionRange(previousPos, previousPos);
  }
 }

 handleDelete(cursorPos) {
  overWriteCharAtPosition(this.input, cursorPos, '_');
  this.input.setSelectionRange(cursorPos, cursorPos);
 }


 handleLeftArrow(cursorPos) {
  const previousPos = this.calculatePreviousCursorPos(cursorPos);
  // const valueBeforeCursor = this.input.value.slice(0, cursorPos);
  // const previousPos = findLastIndex(valueBeforeCursor,
  //       char =>  !includes(SPECIAL_CHARACTERS , char));
  if (previousPos >= 0 ) {
    this.input.setSelectionRange(previousPos, previousPos);
  }
 }

  calculatePreviousCursorPos(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    return  findLastIndex(valueBeforeCursor,
          char =>  !includes(SPECIAL_CHARACTERS , char));
  }


  buildPlaceHolder(): string {
    const chars =  this.aumask.split('') ;
    return chars.reduce((result, char) => {
       return result += includes(SPECIAL_CHARACTERS, char) ? char : '_'
    }, '');
  }

}
