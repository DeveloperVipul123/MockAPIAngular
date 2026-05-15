import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTripsComponent } from './total-trips.component';

describe('TotalTripsComponent', () => {
  let component: TotalTripsComponent;
  let fixture: ComponentFixture<TotalTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalTripsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
