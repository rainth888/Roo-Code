# src/i18n/locales/ja/common.json 补全说明

## 目标文件路径

`src/i18n/locales/ja/common.json`

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
			"oauthLoadFailed": "OAuth認証情報の読み込みに失敗しました。まず認証してください: {{error}}",
			"tokenRefreshFailed": "OAuthトークンの更新に失敗しました: {{error}}",
			"onboardingTimeout": "オンボーディング操作が60秒でタイムアウトしました。後でもう一度お試しください。",
			"projectDiscoveryFailed": "プロジェクトIDを発見できませんでした。'gemini auth'で認証されていることを確認してください。",
			"rateLimitExceeded": "レート制限を超過しました。無料プランの制限に達しています。",
			"badRequest": "不正なリクエスト: {{details}}",
			"apiError": "Gemini CLI APIエラー: {{error}}",
			"completionError": "Gemini CLI補完エラー: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
