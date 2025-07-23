# webview-ui/src/components/settings/constants.ts 补全说明

## 目标文件路径

`webview-ui/src/components/settings/constants.ts`

## 补全位置

在 providers 常量定义中添加 gemini-cli

## 补全内容

```typescript
// 在 providers 数组中添加
export const PROVIDERS = [
	// ... existing providers ...
	"gemini-cli",
	// ... existing providers ...
] as const
```

## 操作说明

1. 在 `PROVIDERS` 数组中添加 `'gemini-cli'` 字符串
2. 确保数组格式正确，逗号分隔
