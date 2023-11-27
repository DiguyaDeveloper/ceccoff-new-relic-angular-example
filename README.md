# CeccoffSonarqubeExample

![Docker runn](image.png)

# Projeto Angular de Boas Práticas

Este projeto Angular exemplifica boas práticas de desenvolvimento de software, demonstrando a integração de ferramentas populares como o SonarQube, GitHooks, ESLint, Prettier, Conventional Commits e Husky. Essas ferramentas visam melhorar a qualidade do código, manter a consistência e facilitar a colaboração em projetos de desenvolvimento.

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

### Instalação do Docker

#### No Windows:

1. Baixe o Docker Desktop para Windows em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) e execute o instalador.

2. Siga as instruções do instalador para concluir a instalação.

3. Após a instalação, inicie o Docker Desktop.

#### No Linux:

1. Siga as instruções específicas para a sua distribuição Linux para instalar o Docker.

2. Execute o seguinte comando para desinstalar todos os pacotes conflitantes:

```bash
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

3. Após a instalação, inicie o serviço Docker. No Ubuntu, você pode usar os seguintes comandos:

```shell
# Adicione a chave GPG oficial do Docker:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Adicione o repositório às fontes do Apt.
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

#  Se você estiver usando uma distribuição derivada do Ubuntu, como o Linux Mint, pode ser necessário usar UBUNTU_CODENAME em vez de VERSION_CODENAME.
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$UBUNTU_CODENAME")" stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

```

### Execução do Docker Compose para o Projeto

1. Navegue até o diretório do projeto que contém o arquivo `docker-compose.yml`.

2. Execute o seguinte comando para construir e iniciar os contêineres definidos no arquivo `docker-compose.yml`:

```bash
docker-compose up -d
```

O uso do `-d` permite que os contêineres sejam executados em segundo plano.

3. Os contêineres agora estão em execução e seu projeto está disponível na configuração definida no arquivo `docker-compose.yml`.

### Execução do SonarQube Scanner para Análise de Código

1. Certifique-se de que o SonarQube Server esteja em execução e acessível. Você deve ter configurado um servidor SonarQube antes de executar esta etapa.

2. Navegue até o diretório raiz do seu projeto onde está localizado o código-fonte.

3. Execute o comando do SonarQube Scanner para iniciar a análise. Substitua `SEU_PROJETO_KEY` e `URL_DO_SERVIDOR_SONAR` pelos valores apropriados:

Se você estiver executando o SonarQube Scanner localmente, em vez de se conectar a um servidor remoto, você pode configurar o scanner para se comunicar com o servidor SonarQube em sua máquina local.

4. Defina a URL do servidor SonarQube como "http://localhost:9000" por padrão (a menos que você tenha alterado a porta padrão durante a configuração do servidor SonarQube).

5. Escolha uma chave de projeto adequada para o seu projeto.

```bash
sonar-scanner -Dsonar.projectKey=SEU_PROJETO_KEY -Dsonar.host.url=URL_DO_SERVIDOR_SONAR
```

```bash local
sonar-scanner -Dsonar.projectKey=SEU_PROJETO_KEY -Dsonar.host.url=http://localhost:9000
```

6. O SonarQube Scanner irá analisar seu código e enviar os resultados para o servidor SonarQube.

7. Acesse o painel do SonarQube para visualizar os resultados da análise e melhorar a qualidade do código.

Aqui está como você pode preencher as informações:

Certifique-se de substituir os marcadores `[Ano]`, `[Nome do Autor]`, `SEU_PROJETO_KEY` e `URL_DO_SERVIDOR_SONAR` pelos valores específicos do seu projeto.

## Ferramentas de Qualidade de Código

Este projeto demonstra a integração de várias ferramentas de qualidade de código:

- **SonarQube**: O SonarQube é uma plataforma de análise estática de código que identifica problemas de código, vulnerabilidades e muito mais. Os resultados das análises podem ser acessados por meio do servidor do SonarQube.

- **ESLint**: O ESLint é uma ferramenta de análise estática de código que identifica e corrige problemas no código JavaScript/TypeScript.

- **Prettier**: O Prettier é um formatador de código automático que ajuda a manter um estilo de código consistente em todo o projeto.

- **Conventional Commits**: Os commits convencionais seguem um padrão específico para melhorar a rastreabilidade e a compreensão das mudanças no código-fonte.

- **Husky e GitHooks**: O Husky é uma ferramenta que permite adicionar ganchos (hooks) do Git para automatizar tarefas, como executar verificações de linting e teste antes de fazer um commit ou push.

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
