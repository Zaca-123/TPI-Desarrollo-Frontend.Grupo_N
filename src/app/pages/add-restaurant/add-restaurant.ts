import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-restaurant.html',
  styleUrls: ['./add-restaurant.css']
})
export class AddRestaurant {
  restaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    imageUrl: new FormControl('', [Validators.required])
  });

  mensajeExito: string = '';
  mostrarMensaje: boolean = false;

  onSubmit() {
    if (this.restaurantForm.valid) {
      console.log('Datos enviados:', this.restaurantForm.value);
      
      this.mensajeExito = '¡Restaurante agregado correctamente!';
      this.mostrarMensaje = true;

      this.restaurantForm.reset();

      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3500);
    } else {
      console.warn('Formulario inválido');
      this.restaurantForm.markAllAsTouched();
    }
  }
}