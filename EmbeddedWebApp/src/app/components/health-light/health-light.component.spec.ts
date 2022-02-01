import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthLightComponent } from './health-light.component';

describe('HealthLightComponent', () => {
  let component: HealthLightComponent;
  let fixture: ComponentFixture<HealthLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
