export interface Trip {
  tripName: string;
  tripId: string;
  tripType: string;
  sourceCity: string;
  destinationCity: string;
  departureDate: string; 
  returnDate: string;     
  transportMode: string;
  estimatedBudget: number;
  tripStatus: string;
}
