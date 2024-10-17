import { APP_INITIALIZER, NgModule } from "@angular/core";
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
import { LandingPageComponent } from "./landing-page/landing-page/landing-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { appInitializer } from "./helpers/appinitializer";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, HomeComponent, LandingPageComponent],
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
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}