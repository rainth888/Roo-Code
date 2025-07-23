# webview-ui/src/i18n/locales/ko/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/ko/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Gemini CLI를 통해 Google의 Gemini 모델 사용",
			"oauthPath": "OAuth 경로",
			"oauthPathDescription": "OAuth 자격 증명 파일의 선택적 경로. 기본값: ~/.gemini/oauth_creds.json",
			"instructions": "먼저 Gemini CLI를 설치하세요",
			"instructionsContinued": "그런 다음 인증하세요",
			"setupLink": "Gemini CLI 설정",
			"requirementsTitle": "요구사항",
			"requirement1": "Gemini CLI 설치됨",
			"requirement2": "OAuth 인증 완료",
			"requirement3": "Google Cloud 프로젝트 구성됨",
			"requirement4": "Code Assist API 활성화됨",
			"requirement5": "적절한 권한 구성됨",
			"freeAccess": "모든 Gemini 모델에 대한 무료 액세스"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
