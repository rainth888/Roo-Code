# webview-ui/src/i18n/locales/de/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/de/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Verwende Google's Gemini-Modelle über die Gemini CLI",
			"oauthPath": "OAuth-Pfad",
			"oauthPathDescription": "Optionaler Pfad zur OAuth-Anmeldedatei. Standard: ~/.gemini/oauth_creds.json",
			"instructions": "Installiere zuerst die Gemini CLI mit",
			"instructionsContinued": "und authentifiziere dich dann mit",
			"setupLink": "Gemini CLI Setup",
			"requirementsTitle": "Anforderungen",
			"requirement1": "Gemini CLI installiert",
			"requirement2": "OAuth-Authentifizierung abgeschlossen",
			"requirement3": "Google Cloud-Projekt konfiguriert",
			"requirement4": "Code Assist API aktiviert",
			"requirement5": "Angemessene Berechtigungen konfiguriert",
			"freeAccess": "Kostenloser Zugang zu allen Gemini-Modellen"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
