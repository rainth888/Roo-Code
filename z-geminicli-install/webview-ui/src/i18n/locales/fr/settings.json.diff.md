# webview-ui/src/i18n/locales/fr/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/fr/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Utilisez les modèles Gemini de Google via la CLI Gemini",
			"oauthPath": "Chemin OAuth",
			"oauthPathDescription": "Chemin optionnel vers le fichier d'identifiants OAuth. Par défaut : ~/.gemini/oauth_creds.json",
			"instructions": "D'abord, installez la CLI Gemini avec",
			"instructionsContinued": "puis authentifiez-vous avec",
			"setupLink": "Configuration de Gemini CLI",
			"requirementsTitle": "Exigences",
			"requirement1": "CLI Gemini installée",
			"requirement2": "Authentification OAuth terminée",
			"requirement3": "Projet Google Cloud configuré",
			"requirement4": "API Code Assist activée",
			"requirement5": "Permissions appropriées configurées",
			"freeAccess": "Accès gratuit à tous les modèles Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
