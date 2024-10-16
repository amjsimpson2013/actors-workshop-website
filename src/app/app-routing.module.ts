import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LandingPageComponent } from "./landing-page/landing-page/landing-page.component";

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}