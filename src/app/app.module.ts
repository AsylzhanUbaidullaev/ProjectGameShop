import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SellingComponent} from './components/selling/selling.component';
import {AboutComponent} from './components/about/about.component';
import {ClashofclansComponent} from './components/clashofclans/clashofclans.component';
import {ClashroyaleComponent} from './components/clashroyale/clashroyale.component';
import {BrawlstarsComponent} from './components/brawlstars/brawlstars.component';
import {AccountsComponent} from './components/accounts/accounts.component';
import {SearchPipe} from './components/accounts/search.pipe';
import {HoverDirective} from './components/accounts/hover.directive';
import {BuyAccComponent} from './components/buy-acc/buy-acc.component';
import {AuthGuard} from './guards/auth.guard';
import {DeactivateGuard} from './guards/deactivate.guard';
import {DeactivateSellingGuard} from './guards/deactivate-selling.guard';
import {CocSellComponent} from './forms/coc-sell/coc-sell.component';
import {CrSellComponent} from './forms/cr-sell/cr-sell.component';
import {BsSellComponent} from './forms/bs-sell/bs-sell.component';
import {LoginComponent} from './forms/login/login.component';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';


const appRoutes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'selling', component: SellingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'clashofclans', component: ClashofclansComponent},
  {path: 'clashroyale', component: ClashroyaleComponent},
  {path: 'brawlstars', component: BrawlstarsComponent},
  { // CanActivate and CanDeactivate Guards
    path: 'buy',
    component: BuyAccComponent,
    canActivate: [AuthGuard],
    canDeactivate: [DeactivateGuard]
  },
   {path: 'admin', component: AdminComponent},
  // FORMS SELLING ---------------------------
  {
    path: 'selling/coc',
    component: CocSellComponent,
    canDeactivate: [DeactivateSellingGuard]
  },
  {
    path: 'selling/cr',
    component: CrSellComponent,
    canDeactivate: [DeactivateSellingGuard]
  },
  {
    path: 'selling/bs',
    component: BsSellComponent,
    canDeactivate: [DeactivateSellingGuard]
  },
  // -----------------------------------------
  // SIGN IN FORM
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SellingComponent,
    AboutComponent,
    ClashofclansComponent,
    ClashroyaleComponent,
    BrawlstarsComponent,
    AccountsComponent,
    SearchPipe,
    HoverDirective,
    BuyAccComponent,
    CocSellComponent,
    CrSellComponent,
    BsSellComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    // AdminModule,
    HttpClientModule
  ],
  providers: [AuthGuard, DeactivateGuard, DeactivateSellingGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
