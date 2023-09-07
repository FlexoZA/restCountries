import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols: number;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cols = 4;
    this.setCols();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.setCols();
  }

  setCols() {
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.cols = 1;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.cols = 2;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }
}
