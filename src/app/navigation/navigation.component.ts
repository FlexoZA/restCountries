import { Component, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent {
  @ViewChild('DialogContent') dialogContent!: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(this.dialogContent); 
  }
}
