import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() item: Book;

  constructor() { }

  ngOnInit() {
  }

}
