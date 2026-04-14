import { Routes } from '@angular/router';

// Components
import { OrderComponent } from './component/order/order';
import { InsertCourseComponent } from './component/insert-course/insert-course';
import { HomeComponent } from './component/home/home';
import { AboutComponent } from './component/about/about';
import { ContactComponent } from './component/contact/contact';
import { NotFoundComponent } from './component/notfound/notfound';

export const routes: Routes = [

  
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'insertcourse', component: InsertCourseComponent },

 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

 
  { path: '', redirectTo: 'order', pathMatch: 'full' },

  
  { path: '**', component: NotFoundComponent }

];