import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcomponentComponent } from './rcomponent.component';

describe('RcomponentComponent', () => {
  let component: RcomponentComponent;
  let fixture: ComponentFixture<RcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
