import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { AvgBudgetComponent } from './avg-budget/avg-budget.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TotalTripsComponent } from './total-trips/total-trips.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { CompletedTripsComponent } from './completed-trips/completed-trips.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MenubarComponent,
    AvgBudgetComponent,
      // ✅ ADD THESE
    TotalTripsComponent,
    UpcomingTripsComponent,
    CompletedTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
        FormsModule,         

    InputTextModule,
        BrowserAnimationsModule,  
          HttpClientModule, 

    PasswordModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    TableModule ,
    ToolbarModule,
    DialogModule,
DropdownModule,
CalendarModule,
InputNumberModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
