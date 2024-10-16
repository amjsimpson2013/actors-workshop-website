import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import MailerLite, { CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrl: './email-pop-up.component.scss'
})

//TODO: Set up API Key for Mailer Lite
export class EmailPopUpComponent {
  mailerLite = new MailerLite({
    api_key: ""
  });

  subscriptionForm = new FormGroup({
    email: new FormControl('', [Validators.email])
  });

  constructor(public dialogRef: MatDialogRef<EmailPopUpComponent>, private _snackBar: MatSnackBar) {
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

  signUp(): void {
    const params: CreateOrUpdateSubscriberParams = {
      email: this.subscriptionForm.get('email')?.value ?? ''
    };

    this.mailerLite.subscribers.createOrUpdate(params)
      .then(() => {
        this._snackBar.open("Thank you for signing up to the newsletter!", 'Close', { duration: 3000 });
      })
      .catch(() => {
        this._snackBar.open("Sorry, there was an error with our subscription service, please try again later", 'Close', { duration: 3000 });
      });
  }
}
