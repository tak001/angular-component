import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
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
    this.selected = {
      isbn: book.isbn,
      title: book.title,
      price: book.price,
      publisher: book.publisher,
    };
  }

  onEdited(book: Book) {
    for (const item of this.books) {
      if (item.isbn === book.isbn) {
        item.title = book.title;
        item.price = book.price;
        item.publisher = book.publisher;
      }
    }
    // 選択された書籍情報を空に（＝フォームを非表示にする）
    this.selected = null;
  }


}
