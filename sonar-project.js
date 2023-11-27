const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    options: {
        'sonar.sources': '.',
        'sonar.inclusions': '**/src/**', // Entry point of your code
        'sonar.login': 'sqp_9e05b05f7ABCD123456ABC190c09c18a47f4d46',
        'sonar.projectKey': 'ceccoff-new-relic-angular-example'
    }
}, () => { });