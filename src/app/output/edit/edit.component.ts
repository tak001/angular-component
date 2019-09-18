import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Book } from '../../book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() item: Book;
  @Output() edited = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onsubmit() {
    this.edited.emit(this.item);
  }

}
