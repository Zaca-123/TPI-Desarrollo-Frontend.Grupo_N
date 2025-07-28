import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.access_token);
  
        const role = this.authService.getUserRole();
        console.log('[LoginComponent] Rol detectado:', role);
  
        if (role === 'admin') {
          this.router.navigate(['/adm-restaurant']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: () => alert('Usuario o contraseña incorrectos'),
    });
  }
  

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
