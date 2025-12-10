# Sistema de Notificações de Devolução de Livros

## Descrição
Sistema automatizado que envia notificações por email para usuários 3 dias antes da data de devolução de seus livros alugados.

## Funcionalidades

### 1. Notificação Automática
- **Execução**: Todos os dias às 09:00 (horário do servidor)
- **Critério**: Aluguéis com status "active" que vencem exatamente em 3 dias
- **Conteúdo**: Email informando o título do livro e a data de devolução

### 2. Endpoint Manual
- **Rota**: `POST /api/v1/notifications/rental/send`
- **Uso**: Permite disparar a verificação manualmente (útil para testes)
- **Permissão**: ADMIN

## Configuração

### 1. Dependências
A dependência `spring-boot-starter-mail` foi adicionada ao `pom.xml`.

### 2. Configuração de Email (application.properties)

```properties
# Configurações de Email
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=${EMAIL_USERNAME:seu-email@gmail.com}
spring.mail.password=${EMAIL_PASSWORD:sua-senha-app}
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
spring.mail.properties.mail.smtp.ssl.trust=smtp.gmail.com

# Configurações de Notificação
notification.rental.days-before-return=3
notification.rental.enabled=true
```

### 3. Configurar Gmail (Recomendado)

#### Opção 1: Senha de App (Mais Seguro)
1. Acesse sua conta Google
2. Vá em **Segurança** → **Verificação em duas etapas** (ative se ainda não estiver)
3. Em **Senhas de app**, gere uma nova senha
4. Configure as variáveis de ambiente:

```bash
# Windows (PowerShell)
$env:EMAIL_USERNAME="seu-email@gmail.com"
$env:EMAIL_PASSWORD="sua-senha-app-16-digitos"

# Linux/Mac
export EMAIL_USERNAME="seu-email@gmail.com"
export EMAIL_PASSWORD="sua-senha-app-16-digitos"
```

#### Opção 2: Permitir Apps Menos Seguros (Não Recomendado)
1. Acesse [Configurações de Segurança do Google](https://myaccount.google.com/security)
2. Ative "Acesso a app menos seguro"

### 4. Configurar Outro Provedor de Email

Para usar Outlook/Hotmail:
```properties
spring.mail.host=smtp-mail.outlook.com
spring.mail.port=587
```

Para usar Yahoo:
```properties
spring.mail.host=smtp.mail.yahoo.com
spring.mail.port=587
```

## Estrutura de Arquivos

### EmailService.java
Responsável pelo envio de emails.

**Método principal:**
```java
sendRentalReturnNotification(String toEmail, String userName, String bookTitle, LocalDate returnDate)
```

### RentalNotificationService.java
Gerencia a lógica de verificação de aluguéis e disparo de notificações.

**Método agendado:**
```java
@Scheduled(cron = "0 0 9 * * *")
checkAndSendRentalNotifications()
```

**Cron Expression Explicado:**
- `0` - segundo (0)
- `0` - minuto (0)
- `9` - hora (09:00)
- `*` - qualquer dia do mês
- `*` - qualquer mês
- `*` - qualquer dia da semana

### NotificationController.java
Endpoint REST para testar notificações manualmente.

## Como Testar

### 1. Teste Manual via Swagger/Postman
```
POST http://localhost:8081/api/v1/notifications/rental/send
```

### 2. Criar Aluguel de Teste
Para testar, crie um aluguel com `returnDate` = hoje + 3 dias:

```java
LocalDate returnDate = LocalDate.now().plusDays(3);
```

### 3. Verificar Logs
Após executar, verifique os logs do console:
```
Iniciando verificação de notificações de devolução...
Email enviado com sucesso para: usuario@email.com
Verificação concluída. 1 notificação(ões) enviada(s)...
```

## Personalização

### Alterar Dias de Antecedência
No `application.properties`:
```properties
notification.rental.days-before-return=5  # Avisa 5 dias antes
```

### Desabilitar Notificações
```properties
notification.rental.enabled=false
```

### Alterar Horário de Execução
Em `RentalNotificationService.java`, modifique o cron:
```java
@Scheduled(cron = "0 0 18 * * *") // 18:00
```

### Personalizar Template de Email
Edite o método `sendRentalReturnNotification()` em `EmailService.java`:
```java
String emailBody = String.format(
    "Olá, %s!\n\n" +
    "Seu livro \"%s\" deve ser devolvido em %s.\n\n" +
    // Adicione mais conteúdo aqui
);
```

## Troubleshooting

### Email não está sendo enviado
1. Verifique as credenciais em `application.properties`
2. Confirme que a senha de app foi gerada corretamente
3. Verifique os logs para mensagens de erro
4. Teste a conectividade SMTP

### Notificações não executam automaticamente
1. Verifique se `@EnableScheduling` está na classe principal
2. Confirme que `notification.rental.enabled=true`
3. Verifique os logs para erros de scheduling

### Emails vão para spam
1. Configure SPF/DKIM no domínio (para produção)
2. Use um serviço profissional como SendGrid ou AWS SES
3. Melhore o conteúdo do email para não parecer spam

## Próximos Passos (Melhorias Futuras)

- [ ] Adicionar templates HTML para emails mais bonitos
- [ ] Implementar sistema de fila de emails (com RabbitMQ ou Kafka)
- [ ] Adicionar retry automático em caso de falha
- [ ] Criar histórico de notificações enviadas (tabela no banco)
- [ ] Implementar notificações por SMS/WhatsApp
- [ ] Permitir que usuários escolham preferências de notificação
- [ ] Adicionar notificação quando o livro está atrasado

## Segurança

⚠️ **IMPORTANTE**: 
- Nunca commite senhas diretamente no `application.properties`
- Use variáveis de ambiente ou serviços de secrets (AWS Secrets Manager, Azure Key Vault)
- Em produção, use serviços profissionais de email (SendGrid, AWS SES, Mailgun)
