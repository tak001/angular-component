import { Component, OnInit } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

import { Book } from '../book';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  selected: Book;
  books: Book[] = [
    {
      isbn: '978-4-7741-8411-1',
      title: 'hoge',
      price: 2980,
      publisher: 'hoge',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'foo',
      price: 3200,
      publisher: 'foo',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(book: Book) {
    this.selected = book;
  }

}
