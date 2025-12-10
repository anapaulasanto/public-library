# Sistema de Notificações - Guia Rápido de Configuração

## 📋 Checklist de Configuração

### 1. ✅ Dependências Adicionadas
- [x] `spring-boot-starter-mail` no pom.xml

### 2. 🔧 Configurar Email

#### Opção A: Variáveis de Ambiente (Recomendado)
```powershell
# No PowerShell:
$env:EMAIL_USERNAME="seu-email@gmail.com"
$env:EMAIL_PASSWORD="sua-senha-app-16-digitos"
```

#### Opção B: Editar application.properties
```properties
spring.mail.username=seu-email@gmail.com
spring.mail.password=sua-senha-app
```

### 3. 📧 Configurar Gmail

1. Acesse: https://myaccount.google.com/security
2. Ative **Verificação em duas etapas**
3. Vá em **Senhas de app**
4. Gere uma senha para "Mail"
5. Use essa senha de 16 dígitos no `EMAIL_PASSWORD`

### 4. 🚀 Iniciar a Aplicação

```bash
cd backend/library
mvn clean install
mvn spring-boot:run
```

### 5. 🧪 Testar

#### Opção 1: Via Swagger
1. Acesse: http://localhost:8081/swagger-ui.html
2. Encontre: `POST /api/v1/notifications/rental/send`
3. Clique em "Try it out" → "Execute"

#### Opção 2: Via PowerShell
```powershell
Invoke-RestMethod -Uri "http://localhost:8081/api/v1/notifications/rental/send" -Method POST
```

#### Opção 3: Criar Aluguel de Teste
1. Execute o script: `test-notifications.sql`
2. Ajuste os IDs de usuário e livro
3. Aguarde ou chame o endpoint manual

### 6. 📊 Verificar Logs

Procure no console:
```
Iniciando verificação de notificações de devolução...
Email enviado com sucesso para: usuario@email.com
Verificação concluída. 1 notificação(ões) enviada(s)
```

## 📁 Arquivos Criados

```
backend/library/
├── src/main/java/br/edu/unichristus/
│   ├── controller/NotificationController.java      ← Endpoint para testes
│   ├── service/EmailService.java                   ← Serviço de envio de email
│   └── service/RentalNotificationService.java      ← Lógica de notificações
├── src/main/resources/application.properties       ← Configurações de email
├── NOTIFICACOES.md                                ← Documentação completa
├── .env.example                                   ← Exemplo de variáveis
└── test-notifications.sql                         ← Script de teste
```

## ⏰ Execução Automática

O sistema verifica **automaticamente todos os dias às 09:00** e envia emails para aluguéis que vencem em **exatamente 3 dias**.

## 🎯 Personalização Rápida

### Alterar horário de execução
Em `RentalNotificationService.java`:
```java
@Scheduled(cron = "0 0 18 * * *") // 18:00 ao invés de 09:00
```

### Alterar dias de antecedência
Em `application.properties`:
```properties
notification.rental.days-before-return=5  # 5 dias ao invés de 3
```

### Desabilitar notificações
```properties
notification.rental.enabled=false
```

## ❗ Troubleshooting

### Email não envia?
- ✅ Verifique se gerou a senha de app corretamente
- ✅ Confirme que as variáveis de ambiente foram definidas
- ✅ Veja os logs para mensagens de erro

### Notificações não executam?
- ✅ Verifique se `@EnableScheduling` está em `LibraryApplication.java`
- ✅ Confirme que `notification.rental.enabled=true`

## 📧 Exemplo de Email Enviado

```
Assunto: Lembrete: Devolução de Livro - O Diário de Anne Frank

Olá, Ricardo Mendes!

Este é um lembrete de que o prazo de devolução do livro "O Diário de Anne Frank" está próximo.

Data de devolução: 12/12/2025

Por favor, providencie a devolução dentro do prazo para evitar multas.

Atenciosamente,
Equipe Public Library
```

## 🔒 Segurança

⚠️ **NUNCA** commite senhas no Git!
- Use variáveis de ambiente
- Adicione `.env` no `.gitignore`
- Em produção, use AWS SES ou SendGrid

---

Para mais detalhes, consulte: **NOTIFICACOES.md**
