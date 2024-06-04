import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmailPopUpComponent } from './email-pop-up/email-pop-up.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'actors-workshop-website';

  constructor(public dialog: MatDialog) {
    let firstTime = localStorage.getItem('firsttime');

    if(!firstTime) {
      firstTime = 'true';
      localStorage.setItem('firsttime', 'true');
      this.openDialog();
    } else {
      localStorage.setItem('firsttime', 'false');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmailPopUpComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      localStorage.setItem('fristtime', 'false');
    });
  }
}
