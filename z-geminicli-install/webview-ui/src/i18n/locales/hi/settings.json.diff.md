# webview-ui/src/i18n/locales/hi/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/hi/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Gemini CLI के माध्यम से Google के Gemini मॉडल का उपयोग करें",
			"oauthPath": "OAuth पथ",
			"oauthPathDescription": "OAuth क्रेडेंशियल फ़ाइल का वैकल्पिक पथ। डिफ़ॉल्ट: ~/.gemini/oauth_creds.json",
			"instructions": "पहले, Gemini CLI को इंस्टॉल करें",
			"instructionsContinued": "और फिर इसके साथ प्रमाणीकरण करें",
			"setupLink": "Gemini CLI सेटअप",
			"requirementsTitle": "आवश्यकताएं",
			"requirement1": "Gemini CLI इंस्टॉल की गई",
			"requirement2": "OAuth प्रमाणीकरण पूरा हुआ",
			"requirement3": "Google Cloud प्रोजेक्ट कॉन्फ़िगर किया गया",
			"requirement4": "Code Assist API सक्षम",
			"requirement5": "उचित अनुमतियां कॉन्फ़िगर की गईं",
			"freeAccess": "सभी Gemini मॉडल तक मुफ्त पहुंच"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
