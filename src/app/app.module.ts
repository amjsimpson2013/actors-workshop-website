import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        MatIconModule, 
        MatButtonModule, 
        MatToolbarModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}