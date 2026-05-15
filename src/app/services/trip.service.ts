import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Trip } from '../model/trip.model';
import { HttpClient } from '@angular/common/http';
import { TRIP_DATA } from '../mock/trip-mock-api';

@Injectable({
  providedIn: 'root'
})
export class TripService {


  private tripsSubject = new BehaviorSubject<Trip[]>([]);
  trips$ = this.tripsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTrips();
  }

  // 🔹 Simulate GET API
  loadTrips() {
    this.mockGetTrips().subscribe(data => {
      this.tripsSubject.next(data);
    });
  }

  // 🔹 MOCK HTTP CALLS
  private mockGetTrips(): Observable<Trip[]> {
    return of(TRIP_DATA).pipe(delay(500)); // simulate network delay
  }

  private mockPostTrip(trip: Trip): Observable<Trip> {
    TRIP_DATA.push(trip);
    return of(trip).pipe(delay(300));
  }

  private mockPutTrip(index: number, trip: Trip): Observable<Trip> {
    TRIP_DATA[index] = trip;
    return of(trip).pipe(delay(300));
  }

  private mockDeleteTrip(index: number): Observable<boolean> {
    TRIP_DATA.splice(index, 1);
    return of(true).pipe(delay(300));
  }

  // 🔹 PUBLIC METHODS
  addTrip(trip: Trip) {
    this.mockPostTrip(trip).subscribe(() => this.loadTrips());
  }

  updateTrip(index: number, trip: Trip) {
    this.mockPutTrip(index, trip).subscribe(() => this.loadTrips());
  }

  deleteTrip(index: number) {
    this.mockDeleteTrip(index).subscribe(() => this.loadTrips());
  }
}
