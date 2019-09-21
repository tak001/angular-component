import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { AfterChildComponent } from './after-child/after-child.component';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements OnInit {
  // ChildComponentを取得
  @ViewChildren(AfterChildComponent) children: QueryList<AfterChildComponent>;

  // ChildComponentの入力値を格納する配列
  poems = ['', '', ''];

  // ビューの変更確認後に処理
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    // 子コンポーネントの値poems
    this.children.forEach((item, index) => {
      if (this.poems[index] !== item.poem) {
        setTimeout(() => {
          this.poems[index] = item.poem;
        }, 0);
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
