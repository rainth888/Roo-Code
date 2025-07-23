# src/i18n/locales/hi/common.json 补全说明

## 目标文件路径

`src/i18n/locales/hi/common.json`

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
			"oauthLoadFailed": "OAuth क्रेडेंशियल लोड करने में विफल। कृपया पहले प्रमाणीकरण करें: {{error}}",
			"tokenRefreshFailed": "OAuth टोकन रीफ्रेश करने में विफल: {{error}}",
			"onboardingTimeout": "ऑनबोर्डिंग ऑपरेशन 60 सेकंड बाद टाइमआउट हो गया। कृपया बाद में पुनः प्रयास करें।",
			"projectDiscoveryFailed": "प्रोजेक्ट ID खोजने में असमर्थ। सुनिश्चित करें कि आप 'gemini auth' के साथ प्रमाणित हैं।",
			"rateLimitExceeded": "दर सीमा पार हो गई। मुफ्त टियर की सीमा पहुंच गई है।",
			"badRequest": "गलत अनुरोध: {{details}}",
			"apiError": "Gemini CLI API त्रुटि: {{error}}",
			"completionError": "Gemini CLI पूर्णता त्रुटि: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
