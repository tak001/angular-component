import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  show = true;
  current = new Date();

  // チェックボックス変更時に実行
  onChange() {
    this.show = !this.show;
    this.current = new Date();
  }

  constructor() {
    console.log('constructor');
  }

  // ライフサイクルメソッド（それぞれのタイミングでログを表示）
  // ページの初期化
  ngOnInit() {
    console.log('ngOnInit');
  }

  // 入力プロパティの変更を検知する
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // 外部コンテンツの初期化
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // 外部コンテンツの変更時の処理
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // ビューの初期化
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // ビュー変更時の処理を実装する
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // ページの終了処理
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
