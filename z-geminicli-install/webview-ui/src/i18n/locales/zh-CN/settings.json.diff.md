# webview-ui/src/i18n/locales/zh-CN/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/zh-CN/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "通过 Gemini CLI 使用 Google 的 Gemini 模型",
			"oauthPath": "OAuth 路径",
			"oauthPathDescription": "OAuth 凭据文件的可选路径。默认：~/.gemini/oauth_creds.json",
			"instructions": "首先，使用以下命令安装 Gemini CLI",
			"instructionsContinued": "然后使用以下命令进行身份验证",
			"setupLink": "Gemini CLI 设置",
			"requirementsTitle": "要求",
			"requirement1": "已安装 Gemini CLI",
			"requirement2": "完成 OAuth 身份验证",
			"requirement3": "已配置 Google Cloud 项目",
			"requirement4": "已启用 Code Assist API",
			"requirement5": "已配置适当的权限",
			"freeAccess": "免费访问所有 Gemini 模型"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
