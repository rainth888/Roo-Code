# src/i18n/locales/tr/common.json 补全说明

## 目标文件路径

`src/i18n/locales/tr/common.json`

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
			"oauthLoadFailed": "OAuth kimlik bilgileri yüklenemedi. Lütfen önce kimlik doğrulaması yapın: {{error}}",
			"tokenRefreshFailed": "OAuth token yenilenemedi: {{error}}",
			"onboardingTimeout": "Onboarding işlemi 60 saniye sonra zaman aşımına uğradı. Lütfen daha sonra tekrar deneyin.",
			"projectDiscoveryFailed": "Proje ID'si keşfedilemedi. 'gemini auth' ile kimlik doğrulaması yaptığınızdan emin olun.",
			"rateLimitExceeded": "Hız sınırı aşıldı. Ücretsiz seviye sınırlarına ulaşıldı.",
			"badRequest": "Geçersiz istek: {{details}}",
			"apiError": "Gemini CLI API hatası: {{error}}",
			"completionError": "Gemini CLI tamamlama hatası: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
