import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-adm-restaurant',
  imports: [CommonModule, FormsModule],
  templateUrl: './adm-restaurant.html',
  styleUrl: './adm-restaurant.css'
})
export class AdmRestaurant {
  showAddForm = false;
  loading = false;
  error: string | null = null;
  successMessage: string | null = null;

  // Datos del nuevo restaurante
  newRestaurant = {
    name: '',
    description: '',
    imageUrl: ''
  };

  constructor(private restaurantService: RestaurantService) {}

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  onSubmit() {
    if (!this.newRestaurant.name.trim()) {
      this.error = 'El nombre del restaurante es obligatorio';
      return;
    }

    this.loading = true;
    this.error = null;
    this.successMessage = null;

    this.restaurantService.createRestaurant(this.newRestaurant).then((restaurant) => {
        this.successMessage = `Restaurante "${restaurant.name}" creado exitosamente`;
        this.resetForm();
        this.showAddForm = false;
        this.loading = false;
      }).catch((err) => {
        this.error = 'Error al crear restaurante: ' + (err.error?.message || err.message);
        this.loading = false;
      })

  }

  private resetForm() {
    this.newRestaurant = {
      name: '',
      description: '',
      imageUrl: ''
    };
    this.error = null;
    this.successMessage = null;
  }
}
