# webview-ui/src/i18n/locales/pl/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/pl/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Używaj modeli Gemini Google przez CLI Gemini",
			"oauthPath": "Ścieżka OAuth",
			"oauthPathDescription": "Opcjonalna ścieżka do pliku poświadczeń OAuth. Domyślnie: ~/.gemini/oauth_creds.json",
			"instructions": "Najpierw zainstaluj CLI Gemini za pomocą",
			"instructionsContinued": "a następnie uwierzytelnij się za pomocą",
			"setupLink": "Konfiguracja Gemini CLI",
			"requirementsTitle": "Wymagania",
			"requirement1": "CLI Gemini zainstalowane",
			"requirement2": "Uwierzytelnianie OAuth zakończone",
			"requirement3": "Projekt Google Cloud skonfigurowany",
			"requirement4": "API Code Assist włączone",
			"requirement5": "Odpowiednie uprawnienia skonfigurowane",
			"freeAccess": "Darmowy dostęp do wszystkich modeli Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
