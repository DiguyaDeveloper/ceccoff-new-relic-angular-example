import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  constructor(private logger: NGXLogger) {}

  public onClickLearnMore(): void {
    this.logger.info('Iniciando Scroll de learn More');

    try {
      // Simula uma exceção
      const errorObject = { message: 'Erro na execução do Scroll' } as any;
      errorObject.message(); // Chamando uma função em um objeto que não é uma função
    } catch (error: any) {
      this.logger.error(error.message);
    }
  }
}
