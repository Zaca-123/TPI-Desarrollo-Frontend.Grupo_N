import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant';
import { Restaurant } from '../../models/restaurant'; 

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-restaurant.html',
  styleUrls: ['./add-restaurant.css']
})
export class AddRestaurant {
  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    imageUrl: new FormControl('')
  });

  mensajeExito: string = '';
  mostrarMensaje: boolean = false;

  constructor(private restaurantService: RestaurantService) {}

  onSubmit() {
    if (this.restaurantForm.valid) {
      const restaurantData = this.restaurantForm.value as {
        name: string;
        description: string;
        imageUrl: string;
      };

      this.restaurantService.createRestaurant(restaurantData).then((res: Restaurant) => {
          console.log('Restaurante guardado:', res);
          this.mensajeExito = '¡Restaurante agregado correctamente!';
          this.mostrarMensaje = true;
          this.restaurantForm.reset();

          setTimeout(() => {
            this.mostrarMensaje = false;
          }, 3500);
        }).catch((err)=> {
          console.error('Error al guardar restaurante:', err);
        })
    } else {
      console.warn('Formulario inválido');
      this.restaurantForm.markAllAsTouched();
    }
  }
}
