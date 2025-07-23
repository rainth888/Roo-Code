# src/i18n/locales/ca/common.json 补全说明

## 目标文件路径

`src/i18n/locales/ca/common.json`

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
			"oauthLoadFailed": "No s'han pogut carregar les credencials OAuth. Si us plau, autentica't primer: {{error}}",
			"tokenRefreshFailed": "No s'ha pogut actualitzar el token OAuth: {{error}}",
			"onboardingTimeout": "L'operació d'onboarding ha esgotat el temps després de 60 segons. Si us plau, torna-ho a provar més tard.",
			"projectDiscoveryFailed": "No s'ha pogut descobrir l'ID del projecte. Assegura't d'estar autenticat amb 'gemini auth'.",
			"rateLimitExceeded": "S'ha superat el límit de velocitat. S'han assolit els límits del nivell gratuït.",
			"badRequest": "Sol·licitud incorrecta: {{details}}",
			"apiError": "Error de l'API Gemini CLI: {{error}}",
			"completionError": "Error de compleció de Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
