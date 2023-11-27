import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

const options = {
  init: {
    page_view_timing: { enabled: false },
    session_trace: { enabled: false },
    distributed_tracing: { enabled: true },
    privacy: { cookies_enabled: true },
    ajax: { deny_list: ['bam.nr-data.net'] },
  }, // NREUM.init
  info: {
    beacon: 'bam.nr-data.net',
    errorBeacon: 'bam.nr-data.net',
    licenseKey: '[YOUR-LICENSE-KEY-HERE]',
    applicationID: '[YOUR-APPLICATION-ID-HERE]',
    sa: 1,
  }, // NREUM.info
  loader_config: {
    accountID: '4180464',
    trustKey: '4180464',
    agentID: '[YOUR-APPLICATION-ID-HERE]',
    licenseKey: '[YOUR-LICENSE-KEY-HERE]',
    applicationID: '[YOUR-APPLICATION-ID-HERE]',
  }, // NREUM.loader_config
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // The agent loader code executes immediately on instantiation.
  constructor() {
    new BrowserAgent(options);
  }
}
