const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': '.',
      'sonar.inclusions': '**/src/**', // Entry point of your code
      'sonar.login': '{key}',
      'sonar.projectKey': 'ceccoff-new-relic-angular-example',
    },
  },
  () => {},
);
