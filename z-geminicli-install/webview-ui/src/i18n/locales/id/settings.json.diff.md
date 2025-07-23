# webview-ui/src/i18n/locales/id/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/id/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Gunakan model Gemini Google melalui CLI Gemini",
			"oauthPath": "Jalur OAuth",
			"oauthPathDescription": "Jalur opsional ke file kredensial OAuth. Default: ~/.gemini/oauth_creds.json",
			"instructions": "Pertama, instal CLI Gemini dengan",
			"instructionsContinued": "dan kemudian autentikasi dengan",
			"setupLink": "Setup Gemini CLI",
			"requirementsTitle": "Persyaratan",
			"requirement1": "CLI Gemini terinstal",
			"requirement2": "Autentikasi OAuth selesai",
			"requirement3": "Proyek Google Cloud dikonfigurasi",
			"requirement4": "API Code Assist diaktifkan",
			"requirement5": "Izin yang tepat dikonfigurasi",
			"freeAccess": "Akses gratis ke semua model Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
