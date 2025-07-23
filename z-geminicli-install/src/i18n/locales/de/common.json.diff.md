# src/i18n/locales/de/common.json 补全说明

## 目标文件路径

`src/i18n/locales/de/common.json`

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
			"oauthLoadFailed": "Fehler beim Laden der OAuth-Anmeldedaten. Bitte authentifiziere dich zuerst: {{error}}",
			"tokenRefreshFailed": "Fehler beim Aktualisieren des OAuth-Tokens: {{error}}",
			"onboardingTimeout": "Onboarding-Vorgang nach 60 Sekunden abgebrochen. Bitte versuche es später erneut.",
			"projectDiscoveryFailed": "Projekt-ID konnte nicht ermittelt werden. Stelle sicher, dass du mit 'gemini auth' authentifiziert bist.",
			"rateLimitExceeded": "Anfragenlimit überschritten. Die Limits des kostenlosen Tarifs wurden erreicht.",
			"badRequest": "Ungültige Anfrage: {{details}}",
			"apiError": "Gemini CLI API-Fehler: {{error}}",
			"completionError": "Gemini CLI Vervollständigungsfehler: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
