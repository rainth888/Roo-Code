# src/i18n/locales/ru/common.json 补全说明

## 目标文件路径

`src/i18n/locales/ru/common.json`

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
			"oauthLoadFailed": "Не удалось загрузить учетные данные OAuth. Сначала выполните аутентификацию: {{error}}",
			"tokenRefreshFailed": "Не удалось обновить токен OAuth: {{error}}",
			"onboardingTimeout": "Операция подключения истекла через 60 секунд. Пожалуйста, попробуйте позже.",
			"projectDiscoveryFailed": "Не удалось обнаружить идентификатор проекта. Убедитесь, что вы аутентифицированы с помощью 'gemini auth'.",
			"rateLimitExceeded": "Превышен лимит скорости. Достигнуты лимиты бесплатного уровня.",
			"badRequest": "Неверный запрос: {{details}}",
			"apiError": "Ошибка API Gemini CLI: {{error}}",
			"completionError": "Ошибка завершения Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
