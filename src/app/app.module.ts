import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { ReactiveFormsModule } from "@angular/forms";
import { EmailPopUpComponent } from "./email-pop-up/email-pop-up.component";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { LandingPageComponent } from "./landing-page/landing-page/landing-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AppComponent, HomeComponent, EmailPopUpComponent, LandingPageComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule, 
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogTitle, 
        MatDialogContent, 
        MatDialogActions, 
        MatDialogClose,
        MatInputModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}