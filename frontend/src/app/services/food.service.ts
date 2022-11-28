import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
