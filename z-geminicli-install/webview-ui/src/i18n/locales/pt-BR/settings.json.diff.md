# webview-ui/src/i18n/locales/pt-BR/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/pt-BR/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Use os modelos Gemini do Google através da CLI Gemini",
			"oauthPath": "Caminho OAuth",
			"oauthPathDescription": "Caminho opcional para o arquivo de credenciais OAuth. Padrão: ~/.gemini/oauth_creds.json",
			"instructions": "Primeiro, instale a CLI Gemini com",
			"instructionsContinued": "e então autentique-se com",
			"setupLink": "Configuração da Gemini CLI",
			"requirementsTitle": "Requisitos",
			"requirement1": "CLI Gemini instalada",
			"requirement2": "Autenticação OAuth concluída",
			"requirement3": "Projeto Google Cloud configurado",
			"requirement4": "API Code Assist habilitada",
			"requirement5": "Permissões apropriadas configuradas",
			"freeAccess": "Acesso gratuito a todos os modelos Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
