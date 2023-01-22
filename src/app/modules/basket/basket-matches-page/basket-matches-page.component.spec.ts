import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketMatchesPageComponent } from './basket-matches-page.component';

describe('BasketMatchesPageComponent', () => {
  let component: BasketMatchesPageComponent;
  let fixture: ComponentFixture<BasketMatchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketMatchesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketMatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
