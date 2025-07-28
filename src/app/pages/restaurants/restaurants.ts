import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.html',
  styleUrls: ['./restaurants.css']
})
export class Restaurants implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().then((data) => {
        this.restaurants = data;
      }).catch((err) => {
        console.error('Error al obtener restaurantes', err);
      })
  }
}
