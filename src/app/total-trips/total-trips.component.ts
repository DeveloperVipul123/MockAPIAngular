import { Component, ViewChild } from '@angular/core';
import { Trip } from '../model/trip.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../services/trip.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-total-trips',
  standalone: false,
  templateUrl: './total-trips.component.html',
  styleUrl: './total-trips.component.css'
})
export class TotalTripsComponent {


    trips: Trip[] = [];

  displayDialog = false;
  tripForm!: FormGroup;
isEditMode = false;
selectedTripIndex: number | null = null;

  tripTypes = ['Business', 'Vacation', 'Personal'];
  transportModes = ['Flight', 'Train', 'Bus', 'Car'];
  tripStatuses = ['Upcoming', 'Completed', 'Cancelled'];
  

  constructor(private fb: FormBuilder, private tripService: TripService) {
  this.tripForm = this.fb.group({
  tripName: ['', Validators.required],
  tripId: [{ value: '', disabled: true }],
  tripType: ['', Validators.required],
  sourceCity: ['', Validators.required],
  destinationCity: ['', Validators.required],
  departureDate: ['', Validators.required],
  returnDate: ['', Validators.required],
  transportMode: ['', Validators.required],
  estimatedBudget: [null, [Validators.required, Validators.min(1)]],
  tripStatus: ['', Validators.required]
});

  } 


    @ViewChild('dt') table!: Table;


  applyGlobalFilter(event: any) {
    const value = event.target.value;
    this.table.filterGlobal(value, 'contains');
  }


  isInvalid(controlName: string): boolean {
  const control = this.tripForm.get(controlName);
  return !!(control && control.invalid && (control.dirty || control.touched));
}


  openAddDialog() {
   this.isEditMode = false;
  this.selectedTripIndex = null;

  this.tripForm.reset();
  this.tripForm.patchValue({
    tripId: 'TRIP' + Math.floor(Math.random() * 10000)
  });

  this.displayDialog = true;
  }

  openEditDialog(trip: Trip, index: number) {
  this.isEditMode = true;
  this.selectedTripIndex = index;

  this.tripForm.reset();
  this.tripForm.patchValue(trip);

  this.displayDialog = true;
}


saveTrip() {
  if (this.tripForm.invalid) {
    this.tripForm.markAllAsTouched();
    return;
  }

  const formValue = this.tripForm.getRawValue();

  if (this.isEditMode && this.selectedTripIndex !== null) {
    this.tripService.updateTrip(this.selectedTripIndex, formValue);
  } else {
    this.tripService.addTrip(formValue);
  }

  this.displayDialog = false;
}



  cancel() {
    this.displayDialog = false;
  }

   ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.tripService.trips$.subscribe(data => {
      this.trips = data;
    });
  }

  addTrip() {
    console.log('Add Trip clicked');
  }

  editTrip(trip: Trip) {
    console.log('Edit Trip', trip);
  }

  deleteTrip(trip: Trip) {
    const index = this.trips.indexOf(trip);
    if (index > -1) {
      this.tripService.deleteTrip(index);
    }
  }

  

}
