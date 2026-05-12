import { Routes } from '@angular/router';
import { CategoryList } from './components/category-list/category-list';
import { TypeListComponent } from './components/type-list/type-list';
import { TypeDetailComponent } from './components/type-detail/type-detail';

export const routes: Routes = [
  { path: '', component: CategoryList },
  { path: 'type/:name', component: TypeListComponent },
  { path: 'type/:name/detail', component: TypeDetailComponent },
];