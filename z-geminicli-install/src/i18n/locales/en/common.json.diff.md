# src/i18n/locales/en/common.json 补全说明

## 目标文件路径

`src/i18n/locales/en/common.json`

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
			"oauthLoadFailed": "Failed to load OAuth credentials. Please authenticate first: {{error}}",
			"tokenRefreshFailed": "Failed to refresh OAuth token: {{error}}",
			"onboardingTimeout": "Onboarding operation timed out after 60 seconds. Please try again later.",
			"projectDiscoveryFailed": "Could not discover project ID. Make sure you're authenticated with 'gemini auth'.",
			"rateLimitExceeded": "Rate limit exceeded. Free tier limits have been reached.",
			"badRequest": "Bad request: {{details}}",
			"apiError": "Gemini CLI API error: {{error}}",
			"completionError": "Gemini CLI completion error: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
