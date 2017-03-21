import { UserService } from './user.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { MovieService } from './item.service';
import { AddItemComponent } from './add-item/add-item.component';
import { FooterComponent } from './footer/footer.component';
import { MovieEditComponent } from './item-edit/item-edit.component';
import { OauthHandlerComponent } from './oauth-handler/oauth-handler.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FundComponent } from './fund/fund.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-access-token',
    headerPrefix: '  ',
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type':'application/json'}]
	}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesListComponent,
    ItemComponent,
    ItemDetailComponent,
    AddItemComponent,
    FooterComponent,
    MovieEditComponent,
    OauthHandlerComponent,
    SignupComponent,
    LoginComponent,
    FundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MovieService, UserService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
