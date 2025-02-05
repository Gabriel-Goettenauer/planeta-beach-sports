import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaquetesBeachTennisComponent } from './raquetes-beach-tennis.component';

describe('RaquetesBeachTennisComponent', () => {
  let component: RaquetesBeachTennisComponent;
  let fixture: ComponentFixture<RaquetesBeachTennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaquetesBeachTennisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaquetesBeachTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
