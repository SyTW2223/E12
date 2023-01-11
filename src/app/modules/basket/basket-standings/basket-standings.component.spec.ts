import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketStandingsComponent } from './basket-standings.component';

describe('BasketStandingsComponent', () => {
  let component: BasketStandingsComponent;
  let fixture: ComponentFixture<BasketStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
