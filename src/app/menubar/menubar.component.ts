import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: false,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css',
})
export class MenubarComponent {

 tripMenuItems: MenuItem[] = [];
   rightMenuItems: MenuItem[] = [];  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tripMenuItems = [
      {
        label: 'Total Trips',
        icon: 'pi pi-list',
        routerLink: 'total'
      },
      {
        label: 'Upcoming Trips',
        icon: 'pi pi-calendar',
        routerLink: 'upcoming'
      },
      {
        label: 'Completed Trips',
        icon: 'pi pi-check-circle',
        routerLink: 'completed'
      },

       {
        label: 'Average Budget',
        icon: 'pi pi-wallet',
        routerLink: 'budget'
      },

      
    ];

  this.rightMenuItems = [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];

  }

    logout() {

      localStorage.clear();
    sessionStorage.clear();


    this.router.navigate(['/login']);
  }
}
