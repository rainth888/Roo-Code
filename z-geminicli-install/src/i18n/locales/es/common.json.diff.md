# src/i18n/locales/es/common.json 补全说明

## 目标文件路径

`src/i18n/locales/es/common.json`

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
			"oauthLoadFailed": "Error al cargar credenciales OAuth. Por favor autentícate primero: {{error}}",
			"tokenRefreshFailed": "Error al actualizar token OAuth: {{error}}",
			"onboardingTimeout": "La operación de incorporación expiró después de 60 segundos. Inténtalo de nuevo más tarde.",
			"projectDiscoveryFailed": "No se pudo descubrir el ID del proyecto. Asegúrate de estar autenticado con 'gemini auth'.",
			"rateLimitExceeded": "Límite de velocidad excedido. Se han alcanzado los límites del nivel gratuito.",
			"badRequest": "Solicitud incorrecta: {{details}}",
			"apiError": "Error de API de Gemini CLI: {{error}}",
			"completionError": "Error de completado de Gemini CLI: {{error}}"
		}
	}
}
```

## 操作说明

1. 在 `errors` 对象中，在 `claudeCode` 字段后添加 `geminiCli` 字段
2. 确保 JSON 格式正确，逗号分隔
3. 保持其他现有内容不变
