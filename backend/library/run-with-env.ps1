# Script para iniciar a aplicação Spring Boot com variáveis de ambiente

Write-Host "Carregando configurações do arquivo .env..." -ForegroundColor Cyan

if (-not (Test-Path ".env")) {
    Write-Host "Arquivo .env não encontrado!" -ForegroundColor Red
    exit 1
}

# Criar hashtable para armazenar variáveis
$envVars = @{}

# Ler variáveis do arquivo .env
foreach ($line in Get-Content .env) {
    if ($line -match '^([^#=]+)=(.+)$') {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        $envVars[$name] = $value
        Write-Host "Configurado: $name" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Iniciando aplicação..." -ForegroundColor Cyan
Write-Host ""

# Passar variáveis de ambiente para o processo Maven
$env:EMAIL_USERNAME = $envVars['EMAIL_USERNAME']
$env:EMAIL_PASSWORD = $envVars['EMAIL_PASSWORD']

./mvnw spring-boot:run
