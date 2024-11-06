import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaquetesPadleComponent } from './raquetes-padle.component';

describe('RaquetesPadleComponent', () => {
  let component: RaquetesPadleComponent;
  let fixture: ComponentFixture<RaquetesPadleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaquetesPadleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaquetesPadleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
