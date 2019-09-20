import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() time: Date;

  constructor() {
    console.log('[child]constructor');
  }

  // ライフサイクルメソッド（それぞれのタイミングでログを表示）
  ngOnInit() {
    console.log('[child]ngOnInit');
  }

  ngOnChanges() {
    console.log('[child]ngOnChanges');
  }

  ngDoCheck() {
    console.log('[child]ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('[child]ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('[child]ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('[child]ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('[child]ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('[child]ngOnDestroy');
  }

}
