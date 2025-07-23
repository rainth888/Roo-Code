# webview-ui/src/i18n/locales/ca/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/ca/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Utilitza els models Gemini de Google via la CLI Gemini",
			"oauthPath": "Camí OAuth",
			"oauthPathDescription": "Camí opcional al fitxer de credencials OAuth. Per defecte: ~/.gemini/oauth_creds.json",
			"instructions": "Primer, instal·la la CLI Gemini amb",
			"instructionsContinued": "i després autentica't amb",
			"setupLink": "Configuració de la CLI Gemini",
			"requirementsTitle": "Requisits",
			"requirement1": "CLI Gemini instal·lada",
			"requirement2": "Autenticació OAuth completada",
			"requirement3": "Projecte de Google Cloud configurat",
			"requirement4": "API de Code Assist habilitada",
			"requirement5": "Permisos adequats configurats",
			"freeAccess": "Accés gratuït a tots els models Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
