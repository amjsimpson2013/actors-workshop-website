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
    // let firstTime = localStorage.getItem('firsttime');
    // this.openDialog();
    // if(!firstTime) {
    //   firstTime = 'true';
    //   localStorage.setItem('firsttime', 'true');
      
    // } else {
    //   localStorage.setItem('firsttime', 'false');
    // }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmailPopUpComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      localStorage.setItem('fristtime', 'false');
    });
  }
}
