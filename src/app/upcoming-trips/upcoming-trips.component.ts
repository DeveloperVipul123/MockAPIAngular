import { Component } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Trip } from '../model/trip.model';

@Component({
  selector: 'app-upcoming-trips',
  standalone: false,
  templateUrl: './upcoming-trips.component.html',
  styleUrl: './upcoming-trips.component.css'
})
export class UpcomingTripsComponent {

 upcomingTrips: Trip[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.tripService.trips$.subscribe(trips => {
      const today = new Date();
      this.upcomingTrips = trips.filter(trip => new Date(trip.departureDate) >= today);
    });
  }


}
