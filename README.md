# Angular com New Relic 🚀

Explore o potencial máximo do seu projeto Angular com o New Relic! Este repositório exemplifica a integração eficiente do New Relic para monitoramento e observabilidade de aplicações frontend. Descubra como otimizar a performance, rastrear eventos críticos e obter insights valiosos para aprimorar a experiência do usuário.

✨ **Recursos Destacados:**

- **Monitoramento Contínuo:** Aprofunde-se no monitoramento contínuo de métricas cruciais para garantir o desempenho ideal da sua aplicação.
- **Observabilidade Avançada:** Utilize recursos avançados de observabilidade para compreender o comportamento do seu aplicativo em detalhes.
- **Rastreamento de Eventos:** Registre eventos significativos em tempo real, possibilitando uma análise minuciosa do fluxo de atividades.

🛠️ **Configuração Simples:**

1. Clone o repositório.
2. Siga as instruções no guia para integrar o New Relic ao seu projeto Angular.
3. Explore as funcionalidades e personalize conforme necessário.

🌐 **Contribuições Bem-Vindas:**
Este repositório está aberto a contribuições! Se você tem ideias para melhorar a integração do New Relic ou deseja adicionar recursos adicionais, sua colaboração é apreciada.

Não deixe seu projeto Angular voar às cegas. Dê a ele a vantagem da observabilidade com o New Relic. Vamos otimizar juntos! 💡💻

[![Clone o Repositório](https://img.shields.io/badge/Clone-Reposit%C3%B3rio-brightgreen)](https://github.com/DiguyaDeveloper/ceccoff-new-relic-angular-example)

## Configuração do Ambiente de Desenvolvimento

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

1. **Node.js e npm**: Certifique-se de que o Node.js está instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. **Angular CLI**: Instale o Angular CLI globalmente executando o seguinte comando:

```bash
npm install -g @angular/cli
```

## Executando o Projeto

Siga estas etapas para executar o projeto localmente:

1. Clone este repositório:

```bash
git clone https://github.com/DiguyaDeveloper/ceccoff-new-relic-angular-example.git
```

2. Navegue até o diretório do projeto:

```bash
cd ceccoff-new-relic-angular-example
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Preencha suas informações do New Relic One:

```typescript
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
```

5. Execute o projeto:

```bash
ng serve
```

6. Acesse seu New Relic Dashboard para ver o resultado em:

[New Relic Link](https://one.newrelic.com/)

## Contribuições

Encorajamos contribuições para aprimorar este projeto e adicionar mais boas práticas. Para contribuir, siga estas etapas:

1. Crie um fork deste repositório.

2. Crie uma branch para sua contribuição:

```bash
git checkout -b minha-contribuicao
```

3. Faça as alterações desejadas no código.

4. Certifique-se de que seu código esteja em conformidade com as regras de linting e formatação usando ESLint e Prettier.

5. Faça commits usando commits convencionais (Conventional Commits).

6. Envie as alterações para o seu fork:

```bash
git push origin minha-contribuicao
```

7. Abra um pull request para a branch principal deste repositório.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---
