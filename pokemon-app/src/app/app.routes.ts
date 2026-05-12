import { Routes } from '@angular/router';
import { CategoryList } from './components/category-list/category-list';
import { TypeList } from './components/type-list/type-list';
import { TypeDetail } from './components/type-detail/type-detail';

export const routes: Routes = [
  { path: '', component: CategoryList },
  { path: 'type/:name', component: TypeList },
  { path: 'type/:name/detail', component: TypeDetail },
];
