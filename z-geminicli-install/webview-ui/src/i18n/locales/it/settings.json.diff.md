# webview-ui/src/i18n/locales/it/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/it/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Usa i modelli Gemini di Google tramite la CLI Gemini",
			"oauthPath": "Percorso OAuth",
			"oauthPathDescription": "Percorso opzionale al file delle credenziali OAuth. Predefinito: ~/.gemini/oauth_creds.json",
			"instructions": "Prima, installa la CLI Gemini con",
			"instructionsContinued": "e poi autenticati con",
			"setupLink": "Configurazione Gemini CLI",
			"requirementsTitle": "Requisiti",
			"requirement1": "CLI Gemini installata",
			"requirement2": "Autenticazione OAuth completata",
			"requirement3": "Progetto Google Cloud configurato",
			"requirement4": "API Code Assist abilitata",
			"requirement5": "Permessi appropriati configurati",
			"freeAccess": "Accesso gratuito a tutti i modelli Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
