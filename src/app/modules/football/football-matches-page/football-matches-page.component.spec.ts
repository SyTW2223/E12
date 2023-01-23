import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchesPageComponent } from './football-matches-page.component';

describe('FootballMatchesPageComponent', () => {
  let component: FootballMatchesPageComponent;
  let fixture: ComponentFixture<FootballMatchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballMatchesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballMatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
