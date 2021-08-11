import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;

      }
    `
  ]
})
export class DashboardComponent {

  constructor(public router: Router) { }


  logout() {
    this.router.navigateByUrl('/auth');
  }

}
