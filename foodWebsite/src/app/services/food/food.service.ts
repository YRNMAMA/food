import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAll(): string[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
