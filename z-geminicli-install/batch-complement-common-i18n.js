const fs = require("fs")
const path = require("path")

// 定义需要补全的语言文件及其翻译内容
const translations = {
	ko: {
		oauthLoadFailed: "OAuth 자격 증명을 로드하지 못했습니다. 먼저 인증하세요: {{error}}",
		tokenRefreshFailed: "OAuth 토큰을 새로 고치지 못했습니다: {{error}}",
		onboardingTimeout: "온보딩 작업이 60초 후 시간 초과되었습니다. 나중에 다시 시도하세요.",
		projectDiscoveryFailed: "프로젝트 ID를 찾을 수 없습니다. 'gemini auth'로 인증했는지 확인하세요.",
		rateLimitExceeded: "속도 제한을 초과했습니다. 무료 티어 한도에 도달했습니다.",
		badRequest: "잘못된 요청: {{details}}",
		apiError: "Gemini CLI API 오류: {{error}}",
		completionError: "Gemini CLI 완료 오류: {{error}}",
	},
	nl: {
		oauthLoadFailed: "OAuth-referenties laden mislukt. Authenticeer eerst: {{error}}",
		tokenRefreshFailed: "OAuth-token vernieuwen mislukt: {{error}}",
		onboardingTimeout: "Onboarding-bewerking is na 60 seconden verlopen. Probeer het later opnieuw.",
		projectDiscoveryFailed:
			"Project-ID kon niet worden ontdekt. Zorg ervoor dat je bent geverifieerd met 'gemini auth'.",
		rateLimitExceeded: "Snelheidslimiet overschreden. Gratis tier-limieten zijn bereikt.",
		badRequest: "Slechte aanvraag: {{details}}",
		apiError: "Gemini CLI API-fout: {{error}}",
		completionError: "Gemini CLI voltooiingsfout: {{error}}",
	},
	pl: {
		oauthLoadFailed: "Nie udało się załadować poświadczeń OAuth. Najpierw uwierzytelnij się: {{error}}",
		tokenRefreshFailed: "Nie udało się odświeżyć tokenu OAuth: {{error}}",
		onboardingTimeout: "Operacja onboardingu przekroczyła limit czasu po 60 sekundach. Spróbuj ponownie później.",
		projectDiscoveryFailed:
			"Nie można odkryć ID projektu. Upewnij się, że jesteś uwierzytelniony za pomocą 'gemini auth'.",
		rateLimitExceeded: "Przekroczono limit szybkości. Osiągnięto limity darmowego tieru.",
		badRequest: "Złe żądanie: {{details}}",
		apiError: "Błąd API Gemini CLI: {{error}}",
		completionError: "Błąd ukończenia Gemini CLI: {{error}}",
	},
	"pt-BR": {
		oauthLoadFailed: "Falha ao carregar credenciais OAuth. Autentique-se primeiro: {{error}}",
		tokenRefreshFailed: "Falha ao atualizar token OAuth: {{error}}",
		onboardingTimeout: "Operação de onboarding expirou após 60 segundos. Tente novamente mais tarde.",
		projectDiscoveryFailed:
			"Não foi possível descobrir o ID do projeto. Certifique-se de estar autenticado com 'gemini auth'.",
		rateLimitExceeded: "Limite de taxa excedido. Os limites do tier gratuito foram atingidos.",
		badRequest: "Solicitação inválida: {{details}}",
		apiError: "Erro da API Gemini CLI: {{error}}",
		completionError: "Erro de conclusão do Gemini CLI: {{error}}",
	},
}

// 目标目录
const targetDir = "../../Roo-Code-3.23.16/src/i18n/locales"

// 补全函数
function complementFile(langCode) {
	const filePath = path.join(targetDir, langCode, "common.json")

	if (!fs.existsSync(filePath)) {
		console.log(`❌ 文件不存在: ${filePath}`)
		return false
	}

	try {
		const content = fs.readFileSync(filePath, "utf8")
		const data = JSON.parse(content)

		// 检查是否已经有geminiCli配置
		if (data.errors && data.errors.geminiCli) {
			console.log(`✅ ${langCode}: 已存在geminiCli配置`)
			return true
		}

		// 获取翻译内容
		const translation = translations[langCode]
		if (!translation) {
			console.log(`❌ ${langCode}: 缺少翻译内容`)
			return false
		}

		// 在claudeCode配置后添加geminiCli配置
		if (data.errors && data.errors.claudeCode) {
			data.errors.geminiCli = translation

			// 重新格式化JSON
			const newContent = JSON.stringify(data, null, "\t")
			fs.writeFileSync(filePath, newContent, "utf8")

			console.log(`✅ ${langCode}: 已补全geminiCli配置`)
			return true
		} else {
			console.log(`❌ ${langCode}: 找不到claudeCode配置`)
			return false
		}
	} catch (error) {
		console.log(`❌ ${langCode}: 处理失败 - ${error.message}`)
		return false
	}
}

// 主函数
function main() {
	console.log("🚀 开始批量补全common.json国际化文件...\n")

	const languages = Object.keys(translations)
	let successCount = 0
	let totalCount = languages.length

	for (const lang of languages) {
		if (complementFile(lang)) {
			successCount++
		}
	}

	console.log(`\n📊 补全结果: ${successCount}/${totalCount} 个文件成功补全`)

	if (successCount === totalCount) {
		console.log("🎉 所有文件补全完成！")
	} else {
		console.log("⚠️ 部分文件补全失败，请检查错误信息")
	}
}

// 运行脚本
main()
