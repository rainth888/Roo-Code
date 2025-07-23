# src/i18n/locales/zh-CN/common.json 补全说明

## 目标文件路径

`src/i18n/locales/zh-CN/common.json`

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
			"oauthLoadFailed": "加载 OAuth 凭据失败。请先进行身份验证：{{error}}",
			"tokenRefreshFailed": "刷新 OAuth Token 失败：{{error}}",
			"onboardingTimeout": "入门操作在 60 秒后超时。请稍后重试。",
			"projectDiscoveryFailed": "无法发现项目 ID。请确保已使用 'gemini auth' 进行身份验证。",
			"rateLimitExceeded": "API 请求频率限制已超出。免费层级限制已达到。",
			"badRequest": "请求错误：{{details}}",
			"apiError": "Gemini CLI API 错误：{{error}}",
			"completionError": "Gemini CLI 补全错误：{{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
