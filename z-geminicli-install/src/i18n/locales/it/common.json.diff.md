# src/i18n/locales/it/common.json 补全说明

## 目标文件路径

`src/i18n/locales/it/common.json`

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
			"oauthLoadFailed": "Impossibile caricare le credenziali OAuth. Autenticati prima: {{error}}",
			"tokenRefreshFailed": "Impossibile aggiornare il token OAuth: {{error}}",
			"onboardingTimeout": "L'operazione di onboarding è scaduta dopo 60 secondi. Riprova più tardi.",
			"projectDiscoveryFailed": "Impossibile scoprire l'ID del progetto. Assicurati di essere autenticato con 'gemini auth'.",
			"rateLimitExceeded": "Limite di velocità superato. I limiti del livello gratuito sono stati raggiunti.",
			"badRequest": "Richiesta non valida: {{details}}",
			"apiError": "Errore API Gemini CLI: {{error}}",
			"completionError": "Errore di completamento Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
