import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AddroomComponent } from '../addroom/addroom.component';
import { AddroomtypeComponent } from '../addroomtype/addroomtype.component';
import { AllroomsComponent } from '../allrooms/allrooms.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'allrooms',
      component: AllroomsComponent,
    },
    {
      path: 'addroom',
      component: AddroomComponent,
    },
    {
      path: 'addroomtype',
      component: AddroomtypeComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
