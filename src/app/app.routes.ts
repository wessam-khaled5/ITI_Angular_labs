import { Routes } from '@angular/router';
import { CoursesComponent } from './component/courses/courses';
import { HomeComponent } from './component/home/home';
import { AboutComponent } from './component/about/about';
import { ContactComponent } from './component/contact/contact';
import { NotFoundComponent } from './component/notfound/notfound';
import { OrderComponent } from './component/order/order';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'courses', component: CoursesComponent },
  { path: 'order', component: OrderComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];