import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgBudgetComponent } from './avg-budget.component';

describe('AvgBudgetComponent', () => {
  let component: AvgBudgetComponent;
  let fixture: ComponentFixture<AvgBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvgBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
