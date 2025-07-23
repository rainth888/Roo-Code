# packages/types/src/providers/index.ts 补全说明

## 目标文件路径

`packages/types/src/providers/index.ts`

## 补全位置

在 `export const providers = [` 数组中添加 `gemini-cli` 导入和导出

## 补全内容

```typescript
// 在文件顶部添加导入
export * from "./gemini-cli"

// 在 providers 数组中添加
export const providers = [
	// ... existing providers ...
	"gemini-cli",
	// ... existing providers ...
] as const
```

## 操作说明

1. 在文件顶部添加 `export * from './gemini-cli';`
2. 在 `providers` 数组中添加 `'gemini-cli'` 字符串
3. 确保 `gemini-cli.ts` 文件已复制到同一目录下
