import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; // ✅ CORRECTA para ES Modules

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/login`, {
      username,
      password,
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);

    try {
      const decoded: any = jwtDecode(token);
      console.log('[AuthService] Token decodificado:', decoded);

      if (decoded?.role) {
        localStorage.setItem('role', decoded.role);
        console.log('[AuthService] Rol guardado en localStorage:', decoded.role);
      } else {
        console.warn('[AuthService] No se encontró rol en el token');
      }
    } catch (error) {
      console.error('[AuthService] Error al decodificar token:', error);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserRole(): string | null {
    const role = localStorage.getItem('role');
    console.log('[AuthService] Rol obtenido de localStorage:', role);
    return role;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
