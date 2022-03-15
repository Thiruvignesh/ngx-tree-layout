import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WrappedLinesComponent} from './wrapped-lines.component';

describe('WrappedLinesComponent', () => {
  let component: WrappedLinesComponent;
  let fixture: ComponentFixture<WrappedLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrappedLinesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappedLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
