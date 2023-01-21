import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeaguesSelectorComponent } from './football-leagues-selector.component';

describe('FootballLeaguesSelectorComponent', () => {
  let component: FootballLeaguesSelectorComponent;
  let fixture: ComponentFixture<FootballLeaguesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballLeaguesSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballLeaguesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
