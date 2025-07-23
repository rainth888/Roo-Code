# webview-ui/src/components/settings/ApiOptions.tsx 补全说明

## 目标文件路径

`webview-ui/src/components/settings/ApiOptions.tsx`

## 补全位置

在 providers 导入和渲染部分添加 GeminiCli 组件

## 补全内容

```typescript
// 在导入部分添加
import { GeminiCli } from './providers/GeminiCli';

// 在 providers 渲染部分添加
{selectedProvider === 'gemini-cli' && <GeminiCli />}
```

## 操作说明

1. 在文件顶部添加 GeminiCli 组件的导入
2. 在 providers 条件渲染部分添加 gemini-cli 的判断和组件渲染
3. 确保 GeminiCli.tsx 文件已复制到 `providers` 目录下
