# webview-ui/src/i18n/locales/en/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/en/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Use Google's Gemini models via the Gemini CLI",
			"pathLabel": "Gemini CLI Path",
			"pathDescription": "Path to your Gemini CLI executable. Defaults to 'gemini' if not set.",
			"pathPlaceholder": "Default: gemini",
			"authButton": "Authenticate with Gemini",
			"authDescription": "Click to authenticate with your Google account",
			"authSuccess": "Successfully authenticated with Gemini",
			"authError": "Failed to authenticate with Gemini: {{error}}",
			"projectLabel": "Project ID",
			"projectDescription": "Google Cloud project ID for Gemini API",
			"projectPlaceholder": "Enter your project ID"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
