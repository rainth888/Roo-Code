# src/i18n/locales/ko/common.json 补全说明

## 目标文件路径

`src/i18n/locales/ko/common.json`

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
			"oauthLoadFailed": "OAuth 자격 증명을 로드하지 못했습니다. 먼저 인증하세요: {{error}}",
			"tokenRefreshFailed": "OAuth 토큰을 새로 고치지 못했습니다: {{error}}",
			"onboardingTimeout": "온보딩 작업이 60초 후 시간 초과되었습니다. 나중에 다시 시도하세요.",
			"projectDiscoveryFailed": "프로젝트 ID를 찾을 수 없습니다. 'gemini auth'로 인증되었는지 확인하세요.",
			"rateLimitExceeded": "속도 제한을 초과했습니다. 무료 등급 제한에 도달했습니다.",
			"badRequest": "잘못된 요청: {{details}}",
			"apiError": "Gemini CLI API 오류: {{error}}",
			"completionError": "Gemini CLI 완성 오류: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
