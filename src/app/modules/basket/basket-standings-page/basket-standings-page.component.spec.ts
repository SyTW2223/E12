import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketStandingsPageComponent } from './basket-standings-page.component';

describe('BasketStandingsPageComponent', () => {
  let component: BasketStandingsPageComponent;
  let fixture: ComponentFixture<BasketStandingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketStandingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketStandingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
