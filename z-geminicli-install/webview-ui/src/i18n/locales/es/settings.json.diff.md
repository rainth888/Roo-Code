# webview-ui/src/i18n/locales/es/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/es/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Usa los modelos Gemini de Google a través de la CLI Gemini",
			"oauthPath": "Ruta OAuth",
			"oauthPathDescription": "Ruta opcional al archivo de credenciales OAuth. Por defecto: ~/.gemini/oauth_creds.json",
			"instructions": "Primero, instala la CLI Gemini con",
			"instructionsContinued": "y luego autentícate con",
			"setupLink": "Configuración de Gemini CLI",
			"requirementsTitle": "Requisitos",
			"requirement1": "CLI Gemini instalada",
			"requirement2": "Autenticación OAuth completada",
			"requirement3": "Proyecto de Google Cloud configurado",
			"requirement4": "API de Code Assist habilitada",
			"requirement5": "Permisos adecuados configurados",
			"freeAccess": "Acceso gratuito a todos los modelos Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
