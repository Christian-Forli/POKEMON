import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.html'
})
export class CategoryList {
  categories = [
    { name: 'fire' },
    { name: 'water' },
    { name: 'grass' }
  ];
}