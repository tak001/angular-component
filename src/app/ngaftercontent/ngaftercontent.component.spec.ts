/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgaftercontentComponent } from './ngaftercontent.component';
import { ParentComponent } from './parent/parent.component';
import { AfterContentChildComponent } from './after-content-child/after-content-child.component';

describe('NgaftercontentComponent', () => {
  let component: NgaftercontentComponent;
  let fixture: ComponentFixture<NgaftercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgaftercontentComponent, ParentComponent, AfterContentChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
