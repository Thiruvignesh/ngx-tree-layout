import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PBICircleComponent} from './pbicircle.component';

describe('PBICircleComponent', () => {
  let component: PBICircleComponent;
  let fixture: ComponentFixture<PBICircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PBICircleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PBICircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
