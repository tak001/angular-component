import { Component, OnInit, AfterContentChecked, ContentChild } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentChecked {
  // AfterContentChildComponentを取得
  @ContentChild(AfterContentChildComponent, { static: false }) child: AfterContentChildComponent;
  poem = '';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.poem !== this.child.poem) {
      this.poem = this.child.poem;
    }
  }

}
