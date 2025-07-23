# src/i18n/locales/nl/common.json 补全说明

## 目标文件路径

`src/i18n/locales/nl/common.json`

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
			"oauthLoadFailed": "Kan OAuth-referenties niet laden. Authenticeer eerst: {{error}}",
			"tokenRefreshFailed": "Kan OAuth-token niet vernieuwen: {{error}}",
			"onboardingTimeout": "Onboarding-operatie is na 60 seconden verlopen. Probeer het later opnieuw.",
			"projectDiscoveryFailed": "Kan project-ID niet ontdekken. Zorg ervoor dat je geauthenticeerd bent met 'gemini auth'.",
			"rateLimitExceeded": "Snelheidslimiet overschreden. Gratis tier limieten zijn bereikt.",
			"badRequest": "Ongeldig verzoek: {{details}}",
			"apiError": "Gemini CLI API-fout: {{error}}",
			"completionError": "Gemini CLI voltooiingsfout: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
