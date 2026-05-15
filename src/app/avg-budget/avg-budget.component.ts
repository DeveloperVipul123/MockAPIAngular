import { Component } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Trip } from '../model/trip.model';

@Component({
  selector: 'app-avg-budget',
  standalone: false,
  templateUrl: './avg-budget.component.html',
  styleUrl: './avg-budget.component.css'
})
export class AvgBudgetComponent {

 trips: Trip[] = [];
  averageBudget: number = 0;
  maxBudget: number = 0;
  minBudget: number = 0;
  totalTrips: number = 0;

  tripTypes: string[] = ['All', 'Business', 'Vacation', 'Personal'];
  selectedType: string = 'All';

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.tripService.trips$.subscribe(trips => {
      this.trips = trips;
      this.calculateStats();
    });
  }

  calculateStats() {
    let filteredTrips = this.selectedType === 'All' ? this.trips : this.trips.filter(t => t.tripType === this.selectedType);
    
    this.totalTrips = filteredTrips.length;
    if (filteredTrips.length > 0) {
      const budgets = filteredTrips.map(t => t.estimatedBudget);
      this.averageBudget = budgets.reduce((a, b) => a + b, 0) / budgets.length;
      this.maxBudget = Math.max(...budgets);
      this.minBudget = Math.min(...budgets);
    } else {
      this.averageBudget = this.maxBudget = this.minBudget = 0;
    }
  }

  onTripTypeChange() {
    this.calculateStats();
  }


  
}
