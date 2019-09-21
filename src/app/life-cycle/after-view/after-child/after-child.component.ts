import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-after-child',
  templateUrl: './after-child.component.html',
  styleUrls: ['./after-child.component.css']
})
export class AfterChildComponent implements OnInit {
  // インデックス値
  @Input() index: number;
  // テキストボックスの入力値
  poem: string;

  constructor() { }

  ngOnInit() {
  }

}
