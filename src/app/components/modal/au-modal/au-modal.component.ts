import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { AuModalService } from '../modal.service';

@Component({
  selector: 'app-au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {
  @Input() body: TemplateRef<any>;
  @Input() context: any;

  constructor(private modalService: AuModalService) { }

  ngOnInit() {
    console.log(this.body);
  }

  onClickOutsideModal() {
    this.modalService.close();
  }

  close() {
    this.modalService.close();
  }

  cancelClick(evt: KeyboardEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }


}
