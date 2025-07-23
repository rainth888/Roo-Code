# webview-ui/src/components/ui/hooks/useSelectedModel.ts 补全说明

## 目标文件路径

`webview-ui/src/components/ui/hooks/useSelectedModel.ts`

## 补全位置

在模型选择逻辑中添加 gemini-cli 支持

## 补全内容

```typescript
// 在模型选择逻辑中添加
case 'gemini-cli':
  return 'gemini-1.5-flash'; // 或其他默认模型
```

## 操作说明

1. 在 switch 语句中添加 `gemini-cli` 的 case
2. 返回 gemini-cli 的默认模型名称
