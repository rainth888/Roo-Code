# webview-ui/src/i18n/locales/ru/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/ru/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Используйте модели Gemini от Google через CLI Gemini",
			"oauthPath": "Путь OAuth",
			"oauthPathDescription": "Необязательный путь к файлу учетных данных OAuth. По умолчанию: ~/.gemini/oauth_creds.json",
			"instructions": "Сначала установите CLI Gemini с помощью",
			"instructionsContinued": "а затем аутентифицируйтесь с помощью",
			"setupLink": "Настройка Gemini CLI",
			"requirementsTitle": "Требования",
			"requirement1": "CLI Gemini установлена",
			"requirement2": "OAuth-аутентификация завершена",
			"requirement3": "Проект Google Cloud настроен",
			"requirement4": "API Code Assist включен",
			"requirement5": "Настроены соответствующие разрешения",
			"freeAccess": "Бесплатный доступ ко всем моделям Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
