# webview-ui/src/i18n/locales/tr/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/tr/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Google'ın Gemini modellerini Gemini CLI aracılığıyla kullanın",
			"oauthPath": "OAuth Yolu",
			"oauthPathDescription": "OAuth kimlik bilgileri dosyasına isteğe bağlı yol. Varsayılan: ~/.gemini/oauth_creds.json",
			"instructions": "Önce Gemini CLI'yi şununla yükleyin",
			"instructionsContinued": "ve sonra şununla kimlik doğrulaması yapın",
			"setupLink": "Gemini CLI Kurulumu",
			"requirementsTitle": "Gereksinimler",
			"requirement1": "Gemini CLI yüklü",
			"requirement2": "OAuth kimlik doğrulaması tamamlandı",
			"requirement3": "Google Cloud projesi yapılandırıldı",
			"requirement4": "Code Assist API etkinleştirildi",
			"requirement5": "Uygun izinler yapılandırıldı",
			"freeAccess": "Tüm Gemini modellerine ücretsiz erişim"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
