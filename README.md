# <p align="center">🌾 AgroSense </p>

<p align="center">👋 Olá! Conheça o **AgroSense**, um sistema de monitoramento de baias agrícolas que permite acompanhar em tempo real o ambiente das plantações!</p>

![React](https://img.shields.io/badge/React-20232A.svg?style=for-the-badge&logo=React&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📘 Sobre o projeto

O **AgroSense** é uma plataforma web desenvolvida para **monitorar baias agrícolas em tempo real**, utilizando sensores conectados a um microcontrolador **ESP32**. Os sensores coletam dados ambientais e enviam para a aplicação online, onde o produtor pode acompanhar a umidade do solo, temperatura, umidade do ar, luminosidade e presença de chuva.

O projeto busca **automatizar o monitoramento agrícola**, promovendo decisões mais inteligentes, sustentáveis e eficientes no manejo das plantações. 🌱

---

## 🎯 Objetivos

- Monitorar variáveis ambientais (umidade do solo, temperatura, umidade do ar, luminosidade, chuva)
- Enviar alertas sobre condições críticas nas baias
- Fornecer visualizações e relatórios em tempo real com gráficos interativos
- Otimizar o manejo agrícola e reduzir desperdícios de recursos

---

## 💻 Tecnologias

### Frontend
- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Recharts** - Biblioteca para gráficos interativos
- **Axios** - Cliente HTTP para requisições à API

### Backend
- **Java 17** com **Spring Boot** - Framework para criação da API REST
- **Spring Data JPA** - Abstração para persistência de dados
- **MySQL** - Banco de dados relacional

### Hardware & IoT
- **ESP32** - Microcontrolador para coleta de dados
- **Sensores:** DHT11 (temperatura/umidade), LDR (luz), umidade do solo, sensor de chuva

### Ferramentas
- **Git & GitHub** - Controle de versão
- **Maven** - Gerenciador de dependências (backend)
- **Vite** - Build tool para o frontend
- **LucidChart** - Diagramas e modelagem

---

## 🌡️ Sensores Integrados

| Sensor | Função | Pino (ESP32) | Tipo |
|--------|---------|---------------|------|
| Sensor de Umidade do Solo | Mede a umidade do solo | GPIO 34 | Analógico |
| Sensor LDR | Mede a luminosidade | GPIO 35 | Analógico |
| Sensor de Chuva | Detecta presença de chuva | GPIO 32 | Digital |
| Sensor DHT11 | Mede temperatura e umidade do ar | GPIO 4 | Digital |

---

## 🚀 Guia de Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- **Java JDK 17+** ([Download](https://www.oracle.com/java/technologies/downloads/))
- **Node.js 18+** e npm ([Download](https://nodejs.org/))
- **MySQL 8+** ([Download](https://dev.mysql.com/downloads/))
- **Git** ([Download](https://git-scm.com/))

---

### 1. Clone o repositório

**Frontend:**
```bash
git clone https://github.com/seu-usuario/agrosense-frontend.git
cd agrosense-frontend
```

**Backend:**
```bash
git clone https://github.com/seu-usuario/agrosense-backend.git
cd agrosense-backend
```

---

### 2. Configure o banco de dados

Abra o MySQL e execute:
```sql
CREATE DATABASE baiasdb;
```

> 💡 **Nota:** O usuário padrão é `root` e a senha `12345` (pode ser alterado no `application.properties`)

---

### 3. Configure e execute o Backend
```bash
cd BackEnd-Cliente

# Configure o application.properties com suas credenciais do MySQL
# Edite: src/main/resources/application.properties

# Instale as dependências e compile
./mvnw clean install

# Execute o backend
./mvnw spring-boot:run
```

✅ O backend estará rodando em: **http://localhost:8080**

---

### 4. Configure e execute o Frontend
```bash
cd agrosense-joao

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

✅ O frontend estará disponível em: **http://localhost:5173**

---

## 📊 Funcionalidades

### Painéis de Controle
- **Dashboard inicial** com resumo de todas as baias
- **Painel individual** para cada baia com dados em tempo real
- **Card meteorológico** integrado com OpenWeatherMap API

### Monitoramento em Tempo Real
- Temperatura ambiente
- Umidade do ar e do solo
- Luminosidade
- Detecção de chuva
- Atualização automática a cada 3 minutos

### Análises e Gráficos
- Gráficos de **área, linha e barra** com Recharts
- Visualização de dados das **últimas 6 horas**
- Histórico **semanal, quinzenal e mensal**
- Gráficos individuais por sensor

---

## 🧩 Estrutura do Projeto

### Frontend
```text
agrosense-joao/
├── public/
│   └── fonts/              # Fonte Novicento
├── src/
│   ├── api/               # Configuração do Axios
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── Card.tsx
│   │   ├── NavBar.tsx
│   │   ├── PainelResumo.tsx
│   │   ├── GraficoArea.tsx
│   │   └── Grafico[Sensor].tsx
│   ├── hooks/             # Custom hooks
│   │   ├── useSensorTempoReal.ts
│   │   ├── useSensorHistorico.ts
│   │   └── useWeather.ts
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── paineis/
│   │       ├── PainelBaia1
│   │   ├── analises/
│   │       ├── AnaliseBaia1
│   ├── types/             # Definições TypeScript
│   ├── App.tsx
│   └── main.tsx
└── package.json
```
### Backend

```text
BackEnd-Cliente/
├── src/main/java/com/agrosense/BackEnd_Cliente/
│   ├── Config/
│   │   └── CorsConfig.java
│   ├── Controllers/
│   │   └── SensorDataController.java
│   ├── Services/
│   │   └── SensorDataService.java
│   ├── entities/
│   │   └── SensorData.java
│   ├── repositories/
│   │   └── SensorDataRepository.java
│   └── BackEndClienteApplication.java
├── src/main/resources/
│   └── application.properties
└── pom.xml
```

---

## 🔌 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| **GET** | `/api/sensores/tempo-real` | Retorna o último registro dos sensores |
| **GET** | `/api/sensores/ultimas6h` | Dados das últimas 6 horas |
| **GET** | `/api/sensores/semana` | Dados dos últimos 7 dias |
| **GET** | `/api/sensores/quinzena` | Dados dos últimos 15 dias |
| **GET** | `/api/sensores/mes` | Dados dos últimos 30 dias |
| **GET** | `/api/sensores/todos` | Lista todos os registros |
| **POST** | `/api/sensores` | Salva novos dados dos sensores |

---

## 🎨 Paleta de Cores

O projeto utiliza tons naturais e terrosos para refletir o ambiente agrícola:

- **Verde primário:** `#445816` (navbar, cards principais)
- **Verde claro:** `#627931` (backgrounds)
- **Bege:** `#ebe7d6` (textos claros)
- **Cores dos sensores:**
  - Umidade Solo: `#528a38`
  - Umidade Ar: `#678c93`
  - Temperatura: `#8b3115`
  - Luminosidade: `#e2cc36`
  - Chuva: `#388a7e`

---



## 🛠️ Problemas Comuns

| Problema | Causa Provável | Solução |
|----------|----------------|---------|
| ❌ Backend não inicia | MySQL não está rodando | Inicie o MySQL e verifique as credenciais no `application.properties` |
| 📡 Sem dados no dashboard | ESP32 desconectado | Verifique a conexão Wi-Fi do ESP32 |
| 🔌 Erro de porta em uso | Porta 8080 ou 5173 ocupada | Pare o processo ou altere a porta no arquivo de configuração |
| 🌐 CORS error | Configuração incorreta | Verifique o `CorsConfig.java` e o `baseURL` no `api.ts` |

---

## 👥 Equipe

Este projeto foi desenvolvido por:

- **Thafany Santos Passos** — Backend e integração com sensores
- **Victoria de Mattos** — Backend e sensores
- **Isabela Etore** — UX Design e montagem da estufa
- **Isabella Carolina** — UX Design e documentação
- **Quéren Hapuque** — Documentação e relatórios

---

## 📚 Contexto Acadêmico

Este projeto foi desenvolvido como **Trabalho de Conclusão de Curso (TCC)** do **Curso Técnico em Desenvolvimento de Sistemas** do **SENAI Gaspar Ricardo Junior** (Sorocaba/SP).

O objetivo é aplicar tecnologias modernas para resolver problemas reais do agronegócio, facilitando o trabalho dos produtores rurais e promovendo uma agricultura mais inteligente e sustentável.

---

## 📄 Licença

Todos os direitos reservados © 2025 — **Equipe AgroSense** 🌾

---

<p align="center">Desenvolvido com 💚 para o futuro do agronegócio brasileiro</p>
