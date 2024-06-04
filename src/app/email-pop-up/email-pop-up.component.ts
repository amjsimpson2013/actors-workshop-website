import { Component} from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-email-pop-up',
  standalone: true,
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './email-pop-up.component.html',
  styleUrl: './email-pop-up.component.scss'
})
export class EmailPopUpComponent {
  constructor(public dialogRef: MatDialogRef<EmailPopUpComponent>) {
    let firstTime = localStorage.getItem('firsttime');

    if(!firstTime) {
      firstTime = 'true';
      localStorage.setItem('firsttime', 'true');
    } else {
      localStorage.setItem('firsttime', 'false');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
