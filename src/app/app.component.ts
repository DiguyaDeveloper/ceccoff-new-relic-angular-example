import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ceccoff-new-relic-angular-example';

  onClickNewRelic() {
    throw new Error('Show in new relic');
  }

  onClickNewRelicLog(input: string) {
    console.log('teste new relic: ' + input);
  }
}
