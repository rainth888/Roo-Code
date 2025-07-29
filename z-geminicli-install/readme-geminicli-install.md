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

- packages/types/src/providers/index.ts（注意：导入路径需加 .js 扩展名，见下方常见问题）
- src/api/index.ts
    - 补全时需：
        1. 导入 `GeminiCliHandler`：`import { GeminiCliHandler } from "./providers/gemini-cli"`
        2. 在 `buildApiHandler` 的 `switch` 语句中添加：
            ```ts
            case "gemini-cli":
                return new GeminiCliHandler(options)
            ```
        3. 移除未使用的 `geminiCliProvider` 导入。
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

### 3.4 逆向补全规则（务必遵循）

- **适用范围**：本规则适用于 Roo-Code 3.22.5 之后的所有版本。
- **补全原则**：对比 3.22.5 和 3.22.4 版本，凡是与 `geminicli` 相关的所有代码（包括导出、注册、配置、国际化等），只要 3.22.5 版本有删除、修改、重命名、别名导出等变动，均需在新版本中"逆向补全"，恢复为 3.22.4 的原始实现。
- **重要限制**：最新版本（如 3.23.16）**不能移除任何现有代码**，只能做"逆向补全"操作。如果最新版本中有新增的代码（即使与 3.22.4 不同），也必须保留，不能删除。
- **排除范围**：不包括 readme 文件、CHANGELOG.md 文件。
- **操作建议**：升级 Roo-Code 后，务必全量对比 3.22.5 与 3.22.4 的所有与 `geminicli` 相关的代码差异，逐项逆向补全，确保功能完整。
- **举例说明**：如 `src/api/providers/index.ts` 中 3.22.5 删除了 `export { GeminiCliHandler } from "./gemini-cli"`，则 3.23.x 及后续版本需补全恢复该导出，且不得使用别名导出。

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
- **Q:** 为什么 `packages/types/src/providers/index.ts` 补全后会编译报错？
    - **A:** 如果你的 tsconfig.json 配置了 `moduleResolution: node16` 或 `nodenext`，所有相对导入都必须带 `.js` 扩展名。请确保补全内容为：
        ```ts
        export * from "./gemini-cli.js"
        ```

---

## 7. 维护说明

- 本文件夹内容需随 Roo-Code 版本和 Gemini CLI 相关代码变更及时更新。
- 如有新增 Gemini CLI 相关功能，请同步补全到本文件夹。

---

## 8. 国际化文件检查清单

以下国际化文件需要补全 geminicli 相关翻译内容：

### 8.1 需要补全的文件清单

- [x] `webview-ui/src/i18n/locales/ca/settings.json` (加泰罗尼亚语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/de/settings.json` (德语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/en/settings.json` (英语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/es/settings.json` (西班牙语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/fr/settings.json` (法语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/hi/settings.json` (印地语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/id/settings.json` (印尼语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/it/settings.json` (意大利语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/ja/settings.json` (日语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/ko/settings.json` (韩语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/nl/settings.json` (荷兰语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/pl/settings.json` (波兰语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/pt-BR/settings.json` (巴西葡萄牙语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/ru/settings.json` (俄语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/tr/settings.json` (土耳其语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/vi/settings.json` (越南语) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/zh-CN/settings.json` (简体中文) ✅ 已完成
- [x] `webview-ui/src/i18n/locales/zh-TW/settings.json` (繁体中文) ✅ 已完成

### 8.2 补全内容

每个文件需要在 `providers` 部分添加以下 `geminiCli` 配置：

```json
"geminiCli": {
    "description": "This provider uses OAuth authentication from the Gemini CLI tool and does not require API keys.",
    "oauthPath": "OAuth Credentials Path (optional)",
    "oauthPathDescription": "Path to the OAuth credentials file. Leave empty to use the default location (~/.gemini/oauth_creds.json).",
    "instructions": "If you haven't authenticated yet, please run",
    "instructionsContinued": "in your terminal first.",
    "setupLink": "Gemini CLI Setup Instructions",
    "requirementsTitle": "Important Requirements",
    "requirement1": "First, you need to install the Gemini CLI tool",
    "requirement2": "Then, run gemini in your terminal and make sure you Log in with Google",
    "requirement3": "Only works with personal Google accounts (not Google Workspace accounts)",
    "requirement4": "Does not use API keys - authentication is handled via OAuth",
    "requirement5": "Requires the Gemini CLI tool to be installed and authenticated first",
    "freeAccess": "Free tier access via OAuth authentication"
}
```

### 8.3 补全位置

在 `providers` 部分的 `claudeCode` 配置之后，`browser` 部分之前插入上述配置。

---

## 9. 主扩展国际化文件检查清单

以下主扩展国际化文件需要补全 geminicli 相关翻译内容：

### 9.1 需要补全的文件清单

- [x] `src/i18n/locales/ca/common.json` (加泰罗尼亚语) ✅ 已完成
- [x] `src/i18n/locales/de/common.json` (德语) ✅ 已完成
- [x] `src/i18n/locales/en/common.json` (英语) ✅ 已完成
- [x] `src/i18n/locales/es/common.json` (西班牙语) ✅ 已完成
- [x] `src/i18n/locales/fr/common.json` (法语) ✅ 已完成
- [x] `src/i18n/locales/hi/common.json` (印地语) ✅ 已完成
- [x] `src/i18n/locales/id/common.json` (印尼语) ✅ 已完成
- [x] `src/i18n/locales/it/common.json` (意大利语) ✅ 已完成
- [x] `src/i18n/locales/ja/common.json` (日语) ✅ 已完成
- [x] `src/i18n/locales/ko/common.json` (韩语) ✅ 已完成
- [x] `src/i18n/locales/nl/common.json` (荷兰语) ✅ 已完成
- [x] `src/i18n/locales/pl/common.json` (波兰语) ✅ 已完成
- [x] `src/i18n/locales/pt-BR/common.json` (巴西葡萄牙语) ✅ 已完成
- [x] `src/i18n/locales/ru/common.json` (俄语) ✅ 已完成
- [x] `src/i18n/locales/tr/common.json` (土耳其语) ✅ 已完成
- [x] `src/i18n/locales/vi/common.json` (越南语) ✅ 已完成
- [x] `src/i18n/locales/zh-CN/common.json` (简体中文) ✅ 已完成
- [x] `src/i18n/locales/zh-TW/common.json` (繁体中文) ✅ 已完成

### 9.2 补全内容

每个文件需要在 `errors` 部分添加以下 `geminiCli` 配置：

```json
"geminiCli": {
    "oauthLoadFailed": "Failed to load OAuth credentials. Please authenticate first: {{error}}",
    "tokenRefreshFailed": "Failed to refresh OAuth token: {{error}}",
    "onboardingTimeout": "Onboarding operation timed out after 60 seconds. Please try again later.",
    "projectDiscoveryFailed": "Could not discover project ID. Make sure you're authenticated with 'gemini auth'.",
    "rateLimitExceeded": "Rate limit exceeded. Free tier limits have been reached.",
    "badRequest": "Bad request: {{details}}",
    "apiError": "Gemini CLI API error: {{error}}",
    "completionError": "Gemini CLI completion error: {{error}}"
}
```

### 9.3 补全位置

在 `errors` 部分的 `claudeCode` 配置之后插入上述配置。

---

如有疑问，请联系维护人。
