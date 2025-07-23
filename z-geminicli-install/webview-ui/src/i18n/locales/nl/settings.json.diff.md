# webview-ui/src/i18n/locales/nl/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/nl/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Gebruik Google's Gemini-modellen via de Gemini CLI",
			"oauthPath": "OAuth-pad",
			"oauthPathDescription": "Optioneel pad naar OAuth-referentiebestand. Standaard: ~/.gemini/oauth_creds.json",
			"instructions": "Installeer eerst de Gemini CLI met",
			"instructionsContinued": "en authenticeer dan met",
			"setupLink": "Gemini CLI Setup",
			"requirementsTitle": "Vereisten",
			"requirement1": "Gemini CLI geïnstalleerd",
			"requirement2": "OAuth-authenticatie voltooid",
			"requirement3": "Google Cloud-project geconfigureerd",
			"requirement4": "Code Assist API ingeschakeld",
			"requirement5": "Passende machtigingen geconfigureerd",
			"freeAccess": "Gratis toegang tot alle Gemini-modellen"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
