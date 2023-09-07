import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restCountries';
  isSmallScreen: boolean = false;

  //Check if app is on small screen
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      '(max-width: 599px)'
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
}
