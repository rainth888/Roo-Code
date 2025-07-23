# webview-ui/src/i18n/locales/zh-TW/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/zh-TW/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "透過 Gemini CLI 使用 Google 的 Gemini 模型",
			"oauthPath": "OAuth 路徑",
			"oauthPathDescription": "OAuth 憑證檔案的選擇性路徑。預設：~/.gemini/oauth_creds.json",
			"instructions": "首先，使用以下命令安裝 Gemini CLI",
			"instructionsContinued": "然後使用以下命令進行驗證",
			"setupLink": "Gemini CLI 設定",
			"requirementsTitle": "要求",
			"requirement1": "已安裝 Gemini CLI",
			"requirement2": "完成 OAuth 驗證",
			"requirement3": "已設定 Google Cloud 專案",
			"requirement4": "已啟用 Code Assist API",
			"requirement5": "已設定適當的權限",
			"freeAccess": "免費存取所有 Gemini 模型"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
