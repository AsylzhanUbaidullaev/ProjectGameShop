import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from "./components/content/content.component";

import { FormComponent } from './components/form/form.component';
import { FormsModule } from "@angular/forms";
import { SellingComponent } from './components/selling/selling.component';
import { CocSellingComponent } from './components/coc-selling/coc-selling.component';
import { CrSellingComponent } from './components/cr-selling/cr-selling.component';
import { BsSellingComponent } from './components/bs-selling/bs-selling.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { ClashofclansComponent } from './components/clashofclans/clashofclans.component';
import { ClashroyaleComponent } from './components/clashroyale/clashroyale.component';
import { BrawlstarsComponent } from './components/brawlstars/brawlstars.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const appRoutes: Routes = [
  {path: '', component: ContentComponent },
  {path: 'selling', component: SellingComponent},
  {path: 'selling/cocSelling', component: CocSellingComponent},
  {path: 'selling/crSelling', component: CrSellingComponent},
  {path: 'selling/bsSelling', component: BsSellingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'clashofclans', component: ClashofclansComponent},
  {path: 'clashroyale', component: ClashroyaleComponent},
  {path: 'brawlstars', component: BrawlstarsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FormComponent,
    SellingComponent,
    CocSellingComponent,
    CrSellingComponent,
    BsSellingComponent,
    SigninComponent,
    AboutComponent,
    ClashofclansComponent,
    ClashroyaleComponent,
    BrawlstarsComponent,
    CarouselComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
