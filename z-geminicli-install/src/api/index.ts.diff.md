# src/api/index.ts 补全说明

## 目标文件路径

`src/api/index.ts`

## 补全位置

在 providers 导入和导出部分添加 gemini-cli 相关代码

## 补全内容

```typescript
// 在 providers 导入部分添加
import { geminiCliProvider } from "./providers/gemini-cli"

// 在 providers 对象中添加
export const providers = {
	// ... existing providers ...
	"gemini-cli": geminiCliProvider,
	// ... existing providers ...
}
```

## 操作说明

1. 在文件顶部添加 `gemini-cli` provider 的导入
2. 在 `providers` 对象中添加 `'gemini-cli': geminiCliProvider` 键值对
3. 确保 `gemini-cli.ts` 文件已复制到 `src/api/providers/` 目录下
