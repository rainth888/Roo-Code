# src/i18n/locales/vi/common.json 补全说明

## 目标文件路径

`src/i18n/locales/vi/common.json`

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
			"oauthLoadFailed": "Không thể tải thông tin xác thực OAuth. Vui lòng xác thực trước: {{error}}",
			"tokenRefreshFailed": "Không thể làm mới token OAuth: {{error}}",
			"onboardingTimeout": "Thao tác onboarding đã hết thời gian chờ sau 60 giây. Vui lòng thử lại sau.",
			"projectDiscoveryFailed": "Không thể khám phá ID dự án. Đảm bảo bạn đã xác thực bằng 'gemini auth'.",
			"rateLimitExceeded": "Đã vượt quá giới hạn tốc độ. Đã đạt đến giới hạn của gói miễn phí.",
			"badRequest": "Yêu cầu không hợp lệ: {{details}}",
			"apiError": "Lỗi API Gemini CLI: {{error}}",
			"completionError": "Lỗi hoàn thành Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
