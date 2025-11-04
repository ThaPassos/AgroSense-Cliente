Sistema de Monitoramento de Baias Agrícolas (SMBAC)
📋 Descrição do Projeto
O Sistema de Monitoramento de Baias Agrícolas (SMBAC) é uma plataforma web desenvolvida para automatizar e monitorar baias agrícolas, permitindo que produtores rurais tenham controle total sobre suas plantações mesmo à distância. O sistema coleta dados ambientais em tempo real através de sensores conectados a microcontroladores ESP32 e os disponibiliza em uma interface web intuitiva.

🎯 Objetivos
Monitorar variáveis ambientais como umidade do solo, temperatura, umidade do ar e luminosidade

Automatizar o processo de coleta e análise de dados agrícolas

Fornecer alertas em tempo real sobre condições críticas nas baias

Otimizar o manejo agrícola através de dados precisos e atualizados

🛠️ Tecnologias Utilizadas
Frontend
React - Biblioteca JavaScript para interface do usuário

Tailwind CSS - Framework CSS para estilização

Recharts - Biblioteca para criação de gráficos e visualizações

Backend
Java Spring Boot - Framework para desenvolvimento da API REST

MySQL - Banco de dados relacional

Ferramentas de Desenvolvimento
LucidChart - Para diagramas e modelagem de dados

Git - Controle de versão

ESP32 - Microcontrolador para coleta de dados dos sensores

Sensores Integrados
Sensor de Umidade do Solo

Sensor de Temperatura e Umidade do Ar (DHT22)

Sensor de Intensidade de Luz (LDR)

Sensor de Presença de Chuva

📁 Estrutura do Projeto
text
/smbac
├── /frontend                 # Aplicação React
│   ├── /src
│   │   ├── /components       # Componentes React
│   │   ├── /pages           # Páginas da aplicação
│   │   ├── /styles          # Estilos Tailwind
│   │   └── /utils           # Utilitários e helpers
│   ├── package.json
│   └── tailwind.config.js
├── /backend                  # API Spring Boot
│   ├── /src/main/java
│   │   ├── /controller       # Controladores REST
│   │   ├── /service         # Lógica de negócio
│   │   ├── /repository      # Acesso a dados
│   │   └── /entity          # Entidades JPA
│   └── application.properties
├── /database                 # Scripts SQL
│   └── schema.sql           # Esquema do banco de dados
└── README.md
🚀 Guia de Instalação
Pré-requisitos
Java JDK 17+

Node.js 18+ e npm

MySQL 8+

Git instalado

1. Clonar o Repositório
bash
git clone <url-do-repositorio>
cd smbac
2. Configurar o Banco de Dados
sql
-- Conectar ao MySQL e executar:
CREATE DATABASE smbac;
-- Usuário/senha padrão: root/root (configurável no application.properties)
3. Configurar e Executar o Backend (Spring Boot)
bash
# Navegar para o diretório do backend
cd backend

# Configurar o application.properties com as credenciais do banco:
# spring.datasource.url=jdbc:mysql://localhost:3306/smbac
# spring.datasource.username=root
# spring.datasource.password=root

# Executar a aplicação Spring Boot
./mvnw spring-boot:run
# Ou usando Maven wrapper
mvn spring-boot:run
O backend estará disponível em: http://localhost:8080

4. Configurar e Executar o Frontend (React)
bash
# Navegar para o diretório do frontend (em outro terminal)
cd frontend

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm start
O frontend estará disponível em: http://localhost:3000

5. Configuração dos Sensores ESP32
O sistema utiliza ESP32 com os seguintes sensores conectados:

Sensor de Umidade do Solo - GPIO 34 (Analógico)

Sensor LDR (Luminosidade) - GPIO 35 (Analógico)

Sensor de Chuva - GPIO 32 (Digital)

Sensor DHT11 (Temperatura/Umidade) - GPIO 4 (Digital)

📊 Funcionalidades Principais
Para o Produtor Rural
✅ Dashboard com visão geral de todas as baias

✅ Monitoramento em Tempo Real dos sensores

✅ Gráficos e Relatórios com Recharts

✅ Sistema de Alertas automáticos

✅ Controle Individual por baia

✅ Histórico de Dados e tendências

Módulos do Sistema
Controle das Baias - Visualização e gerenciamento

Colheita Mensal - Histórico de medições

Porcentagem Geral - Indicadores de eficiência

Resultados - Relatórios consolidados

🔧 Desenvolvimento
Padrões de Código
Backend (Java Spring Boot)
java
// Classes em PascalCase
public class BaiaController {
    // Variáveis em camelCase
    private String nomeBaia;
    private Double temperaturaAtual;
}
Frontend (React)
javascript
// Componentes em PascalCase
const BaiaMonitor = () => {
  // Hooks e variáveis em camelCase
  const [sensorData, setSensorData] = useState([]);
  
  return (
    // JSX com Tailwind CSS
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">Monitoramento</h2>
    </div>
  );
};
API Endpoints Principais
Método	Endpoint	Descrição
GET	/api/baias	Lista todas as baias
POST	/api/login	Autenticação do produtor
GET	/api/baias/{id}/sensores	Dados dos sensores da baia
POST	/api/alertas	Configuração de alertas
🧪 Testes
Testes Automatizados
bash
# Backend
cd backend
./mvnw test

# Frontend
cd frontend
npm test
Cobertura de Testes
90% de cobertura em módulos críticos

Execução automática via GitHub Actions

📞 Suporte e Troubleshooting
Problemas Comuns
Dados não atualizando:

Verificar conexão Wi-Fi do ESP32

Reiniciar microcontrolador se necessário

Sistema lento:

Verificar conexão de internet

Recarregar a página

Gráficos não carregam:

Confirmar se sensores estão enviando dados

Verificar conexão com backend

👥 Equipe de Desenvolvimento
Thafany Passos - Desenvolvimento Backend e Sensores

Victoria de Mattos - Desenvolvimento Backend e Sensores

Isabela Etore - UX Designer e Construção de Estufa

Isabella Carolina - UX Designer e Documentação

Quéren Hapuque - Documentação

📄 Licença
Este projeto foi desenvolvido como Trabalho de Conclusão de Curso do Curso Técnico em Desenvolvimento de Sistemas do SENAI Gaspar Ricardo Junior.