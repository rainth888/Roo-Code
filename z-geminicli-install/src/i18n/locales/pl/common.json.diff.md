# src/i18n/locales/pl/common.json 补全说明

## 目标文件路径

`src/i18n/locales/pl/common.json`

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
			"oauthLoadFailed": "Nie udało się załadować danych uwierzytelniających OAuth. Najpierw się uwierzytelnij: {{error}}",
			"tokenRefreshFailed": "Nie udało się odświeżyć tokenu OAuth: {{error}}",
			"onboardingTimeout": "Operacja wdrażania przekroczyła limit czasu po 60 sekundach. Spróbuj ponownie później.",
			"projectDiscoveryFailed": "Nie można odkryć ID projektu. Upewnij się, że jesteś uwierzytelniony za pomocą 'gemini auth'.",
			"rateLimitExceeded": "Przekroczono limit szybkości. Osiągnięto limity darmowego poziomu.",
			"badRequest": "Nieprawidłowe żądanie: {{details}}",
			"apiError": "Błąd API Gemini CLI: {{error}}",
			"completionError": "Błąd uzupełniania Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
