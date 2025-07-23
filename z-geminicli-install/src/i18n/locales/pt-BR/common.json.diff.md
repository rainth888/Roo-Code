# src/i18n/locales/pt-BR/common.json 补全说明

## 目标文件路径

`src/i18n/locales/pt-BR/common.json`

## 补全位置

在 `errors` 部分的 `claudeCode` 字段后添加 `geminiCli` 字段

## 补全内容

```json
{
	"errors": {
		"claudeCode": {
			// ... existing claudeCode content ...
		},
		"geminiCli": {
			"oauthLoadFailed": "Falha ao carregar credenciais OAuth. Por favor, autentique-se primeiro: {{error}}",
			"tokenRefreshFailed": "Falha ao atualizar token OAuth: {{error}}",
			"onboardingTimeout": "A operação de integração expirou após 60 segundos. Por favor, tente novamente mais tarde.",
			"projectDiscoveryFailed": "Não foi possível descobrir o ID do projeto. Certifique-se de estar autenticado com 'gemini auth'.",
			"rateLimitExceeded": "Limite de taxa excedido. Os limites do nível gratuito foram atingidos.",
			"badRequest": "Solicitação inválida: {{details}}",
			"apiError": "Erro da API Gemini CLI: {{error}}",
			"completionError": "Erro de conclusão do Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
