import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent {
  constructor(private logger: NGXLogger) {}

  public onClickLogIn(): void {
    this.logger.info('Iniciando login');

    try {
      // Simula uma exceção
      throw new Error('Erro simulado no login');
    } catch (error: any) {
      this.logger.error(error.message);
    }
  }

  public onClickSingUp(): void {
    this.logger.info('Iniciando SingUp');
  }
}
