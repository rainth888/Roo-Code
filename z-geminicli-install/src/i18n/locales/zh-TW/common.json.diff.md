# src/i18n/locales/zh-TW/common.json 补全说明

## 目标文件路径

`src/i18n/locales/zh-TW/common.json`

## 补全位置

在 `errors` 部分的 `claudeCode` 字段后添加 `geminiCli` 字段

## 补全内容

```json
{
	"errors": {
		"claudeCode": {
			// ... existing claudeCode content ...
		},
		"geminiCli": {
			"oauthLoadFailed": "無法載入 OAuth 憑證。請先進行驗證：{{error}}",
			"tokenRefreshFailed": "無法重新整理 OAuth 權杖：{{error}}",
			"onboardingTimeout": "新手導引操作在 60 秒後逾時。請稍後再試。",
			"projectDiscoveryFailed": "無法發現專案 ID。請確保您已使用 'gemini auth' 進行驗證。",
			"rateLimitExceeded": "超過速率限制。已達到免費層級限制。",
			"badRequest": "錯誤的請求：{{details}}",
			"apiError": "Gemini CLI API 錯誤：{{error}}",
			"completionError": "Gemini CLI 完成錯誤：{{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
