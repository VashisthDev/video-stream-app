import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreampageComponent } from './streampage.component';

describe('StreampageComponent', () => {
  let component: StreampageComponent;
  let fixture: ComponentFixture<StreampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreampageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
