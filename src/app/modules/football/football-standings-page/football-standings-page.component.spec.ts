import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballStandingsPageComponent } from './football-standings-page.component';

describe('FootballStandingsPageComponent', () => {
  let component: FootballStandingsPageComponent;
  let fixture: ComponentFixture<FootballStandingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballStandingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballStandingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
