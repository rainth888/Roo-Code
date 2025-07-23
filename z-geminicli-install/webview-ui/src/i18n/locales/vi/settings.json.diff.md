# webview-ui/src/i18n/locales/vi/settings.json 补全说明

## 目标文件路径

`webview-ui/src/i18n/locales/vi/settings.json`

## 补全位置

在 `providers` 部分添加 `geminiCli` 字段

## 补全内容

```json
{
	"providers": {
		// ... existing providers ...
		"geminiCli": {
			"name": "Gemini CLI",
			"description": "Sử dụng các mô hình Gemini của Google thông qua CLI Gemini",
			"oauthPath": "Đường dẫn OAuth",
			"oauthPathDescription": "Đường dẫn tùy chọn đến tệp thông tin xác thực OAuth. Mặc định: ~/.gemini/oauth_creds.json",
			"instructions": "Đầu tiên, cài đặt CLI Gemini với",
			"instructionsContinued": "và sau đó xác thực với",
			"setupLink": "Thiết lập Gemini CLI",
			"requirementsTitle": "Yêu cầu",
			"requirement1": "CLI Gemini đã cài đặt",
			"requirement2": "Xác thực OAuth hoàn tất",
			"requirement3": "Dự án Google Cloud đã cấu hình",
			"requirement4": "API Code Assist đã bật",
			"requirement5": "Quyền thích hợp đã cấu hình",
			"freeAccess": "Truy cập miễn phí vào tất cả các mô hình Gemini"
		}
	}
}
```

## 操作说明

1. 在 `providers` 对象中添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
