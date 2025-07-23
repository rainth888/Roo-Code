# webview-ui/src/i18n/locales/ja/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/ja/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Gemini CLI を通じて Google の Gemini モデルを使用",
			"oauthPath": "OAuth パス",
			"oauthPathDescription": "OAuth 認証情報ファイルへのオプションパス。デフォルト: ~/.gemini/oauth_creds.json",
			"instructions": "まず、Gemini CLI をインストールしてください",
			"instructionsContinued": "その後、認証してください",
			"setupLink": "Gemini CLI セットアップ",
			"requirementsTitle": "要件",
			"requirement1": "Gemini CLI がインストール済み",
			"requirement2": "OAuth 認証が完了",
			"requirement3": "Google Cloud プロジェクトが設定済み",
			"requirement4": "Code Assist API が有効",
			"requirement5": "適切な権限が設定済み",
			"freeAccess": "すべての Gemini モデルへの無料アクセス"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
