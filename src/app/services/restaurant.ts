import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { AxiosInstance } from 'axios';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:3001/restaurant'; 
  axios:AxiosInstance

  constructor(private http: HttpClient) {
    // add autorization interceptor to http
    this.axios=AxiosService.getInstance()
    
  }

  async getRestaurants(): Promise<Restaurant[]> {
    return (await this.axios.get<Restaurant[]>(this.apiUrl)).data;
  }

  async createRestaurant(restaurant: Omit<Restaurant, 'id'>): Promise<Restaurant> {
    return (await this.axios.post<Restaurant>(this.apiUrl,restaurant)).data;
  }
}
