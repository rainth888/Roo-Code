# src/i18n/locales/id/common.json 补全说明

## 目标文件路径

`src/i18n/locales/id/common.json`

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
			"oauthLoadFailed": "Gagal memuat kredensial OAuth. Silakan autentikasi terlebih dahulu: {{error}}",
			"tokenRefreshFailed": "Gagal memperbarui token OAuth: {{error}}",
			"onboardingTimeout": "Operasi onboarding habis waktu setelah 60 detik. Silakan coba lagi nanti.",
			"projectDiscoveryFailed": "Tidak dapat menemukan ID proyek. Pastikan Anda terautentikasi dengan 'gemini auth'.",
			"rateLimitExceeded": "Batas kecepatan terlampaui. Batas tingkat gratis telah tercapai.",
			"badRequest": "Permintaan tidak valid: {{details}}",
			"apiError": "Kesalahan API Gemini CLI: {{error}}",
			"completionError": "Kesalahan penyelesaian Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
