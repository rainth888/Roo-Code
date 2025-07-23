# src/i18n/locales/fr/common.json 补全说明

## 目标文件路径

`src/i18n/locales/fr/common.json`

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
			"oauthLoadFailed": "Échec du chargement des identifiants OAuth. Veuillez vous authentifier d'abord : {{error}}",
			"tokenRefreshFailed": "Échec du renouvellement du token OAuth : {{error}}",
			"onboardingTimeout": "L'opération d'intégration a expiré après 60 secondes. Veuillez réessayer plus tard.",
			"projectDiscoveryFailed": "Impossible de découvrir l'ID du projet. Assurez-vous d'être authentifié avec 'gemini auth'.",
			"rateLimitExceeded": "Limite de débit dépassée. Les limites du niveau gratuit ont été atteintes.",
			"badRequest": "Requête incorrecte : {{details}}",
			"apiError": "Erreur API Gemini CLI : {{error}}",
			"completionError": "Erreur de complétion Gemini CLI : {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
