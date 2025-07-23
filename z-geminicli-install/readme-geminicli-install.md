# Gemini CLI 补全指引

本文件夹用于 Roo-Code 升级后，自动/手动补全 Gemini CLI 相关代码。
请严格按照以下步骤操作，确保所有 Gemini CLI 相关功能完整恢复。

---

## 1. 适用场景

- Roo-Code 升级后，`gemini-cli` 相关代码被移除或缺失。
- 需要将 `gemini-cli` 相关代码、配置、国际化内容等补全到最新版 Roo-Code 项目中。

---

## 2. 文件夹结构说明

- 本文件夹下包含：
    - 本指引文档（readme-geminicli-install.md）
    - 所有需要补全的代码片段/文件（按原始目录结构存放）
    - 每个文件的补全说明（包含目标路径、插入/替换位置、补全内容）

---

## 3. 操作步骤

### 3.1 直接复制的文件

将以下文件**直接复制**到 Roo-Code 项目对应目录（覆盖同名文件）：

```
packages/types/src/providers/gemini-cli.ts
src/api/providers/__tests__/gemini-cli.spec.ts
src/api/providers/gemini-cli.ts
webview-ui/src/components/settings/providers/GeminiCli.tsx
webview-ui/src/components/settings/providers/__tests__/GeminiCli.spec.tsx
```

> 源文件已在本文件夹下按目录结构存放，直接复制即可。

---

### 3.2 代码补全/片段插入

对于下列文件，**请根据本文件夹下的补全说明和代码片段**，在指定位置插入/替换相关内容：

- packages/types/src/providers/index.ts
- src/api/index.ts
- src/api/providers/index.ts
- src/shared/checkExistApiConfig.ts
- webview-ui/src/components/settings/ApiOptions.tsx
- webview-ui/src/components/settings/constants.ts
- webview-ui/src/components/settings/providers/index.ts
- webview-ui/src/components/ui/hooks/useSelectedModel.ts
- webview-ui/src/utils/validate.ts

#### 国际化文件（common.json/settings.json）

- src/i18n/locales/\*/common.json
- webview-ui/src/i18n/locales/\*/settings.json

> 具体补全内容、插入位置、格式要求详见本文件夹下的每个文件的 `补全说明.md` 或 `diff片段.txt`。

---

### 3.3 操作建议

1. **先备份**目标 Roo-Code 项目。
2. 先复制直接覆盖的文件。
3. 按照每个补全文件夹下的说明，逐一补全代码片段。
4. 国际化文件请用 JSON 工具校验格式。
5. 补全后建议全局搜索 `gemini`/`geminiCli` 关键字，确保所有相关内容已补全。
6. 运行测试用例，确保功能正常。

---

## 4. 目录结构示例

```
z-geminicli-install/
  readme-geminicli-install.md
  packages/
    types/
      src/
        providers/
          gemini-cli.ts
          index.ts.diff.md
  src/
    api/
      index.ts.diff.md
      providers/
        __tests__/
          gemini-cli.spec.ts
        gemini-cli.ts
        index.ts.diff.md
    i18n/
      locales/
        en/
          common.json.diff.md
        ...
    shared/
      checkExistApiConfig.ts.diff.md
  webview-ui/
    src/
      components/
        settings/
          ApiOptions.tsx.diff.md
          constants.ts.diff.md
          providers/
            GeminiCli.tsx
            __tests__/
              GeminiCli.spec.tsx
            index.ts.diff.md
        ui/
          hooks/
            useSelectedModel.ts.diff.md
      i18n/
        locales/
          en/
            settings.json.diff.md
          ...
      utils/
        validate.ts.diff.md
```

---

## 5. 代码片段说明文件格式建议

每个 `.diff.md` 文件建议包含：

- **目标文件路径**
- **补全/插入位置说明**（如：在 `export const providers = [` 下方插入...）
- **补全内容代码块**
- **如有多处补全，分段说明**

---

## 6. 常见问题

- **Q:** 如何确保补全内容不会被覆盖？
    - **A:** 建议每次 Roo-Code 升级后，第一时间执行本补全操作。
- **Q:** 国际化内容如何合并？
    - **A:** 仅补全 `geminiCli` 相关字段，避免覆盖其他内容。

---

## 7. 维护说明

- 本文件夹内容需随 Roo-Code 版本和 Gemini CLI 相关代码变更及时更新。
- 如有新增 Gemini CLI 相关功能，请同步补全到本文件夹。

---

如有疑问，请联系维护人。
