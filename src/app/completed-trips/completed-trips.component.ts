import { Component } from '@angular/core';
import { Trip } from '../model/trip.model';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-completed-trips',
  standalone: false,
  templateUrl: './completed-trips.component.html',
  styleUrl: './completed-trips.component.css'
})
export class CompletedTripsComponent {

   completedTrips: Trip[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    const cutoffDate = new Date('2025-12-26'); 
    this.tripService.trips$.subscribe(trips => {
      this.completedTrips = trips
        .filter(trip => new Date(trip.returnDate) < cutoffDate)
        .sort((a, b) => new Date(a.returnDate).getTime() - new Date(b.returnDate).getTime());
    });
  }

}
