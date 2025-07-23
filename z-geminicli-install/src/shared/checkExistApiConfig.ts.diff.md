# src/shared/checkExistApiConfig.ts 补全说明

## 目标文件路径

`src/shared/checkExistApiConfig.ts`

## 补全位置

在 providers 检查逻辑中添加 gemini-cli 支持

## 补全内容

```typescript
// 在 providers 检查逻辑中添加
case 'gemini-cli':
  return true; // gemini-cli 不需要 API key 配置
```

## 操作说明

1. 在 switch 语句中添加 `gemini-cli` 的 case
2. 返回 `true` 因为 gemini-cli 使用 OAuth 认证，不需要 API key
