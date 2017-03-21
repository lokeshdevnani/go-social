import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OauthHandlerComponent } from './oauth-handler/oauth-handler.component';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MovieEditComponent } from './item-edit/item-edit.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/campaigns', pathMatch: 'full' },
    { path: 'campaigns',         component: MoviesListComponent },
    { path: 'campaigns/new',     component: AddItemComponent    }, //,canActivate: [AuthGuardService]
    { path: 'campaigns/:id',      component: ItemDetailComponent },
    { path: 'campaigns/:id/edit', component: MovieEditComponent,  canActivate: [AuthGuardService] },
    { path: 'oauth/:token',   component: OauthHandlerComponent },
    { path: 'signup',   component: SignupComponent },
    { path: 'login',   component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class AppRoutingModule { }


