const fs = require("fs")
const path = require("path")

// 定义需要补全的语言文件及其翻译内容
const translations = {
	ca: {
		description: "Aquest proveïdor utilitza autenticació OAuth de l'eina Gemini CLI i no requereix claus API.",
		oauthPath: "Ruta de credencials OAuth (opcional)",
		oauthPathDescription:
			"Ruta al fitxer de credencials OAuth. Deixa-ho buit per utilitzar la ubicació per defecte (~/.gemini/oauth_creds.json).",
		instructions: "Si encara no t'has autenticat, executa primer",
		instructionsContinued: "al teu terminal.",
		setupLink: "Instruccions de configuració de Gemini CLI",
		requirementsTitle: "Requisits importants",
		requirement1: "Primer, necessites instal·lar l'eina Gemini CLI",
		requirement2: "Després, executa gemini al teu terminal i assegura't que inicies sessió amb Google",
		requirement3: "Només funciona amb comptes personals de Google (no comptes de Google Workspace)",
		requirement4: "No utilitza claus API - l'autenticació es gestiona via OAuth",
		requirement5: "Requereix que l'eina Gemini CLI s'instal·li i autentiqui primer",
		freeAccess: "Accés gratuït via autenticació OAuth",
	},
	es: {
		description:
			"Este proveedor utiliza autenticación OAuth de la herramienta Gemini CLI y no requiere claves API.",
		oauthPath: "Ruta de credenciales OAuth (opcional)",
		oauthPathDescription:
			"Ruta al archivo de credenciales OAuth. Déjalo vacío para usar la ubicación predeterminada (~/.gemini/oauth_creds.json).",
		instructions: "Si aún no te has autenticado, ejecuta primero",
		instructionsContinued: "en tu terminal.",
		setupLink: "Instrucciones de configuración de Gemini CLI",
		requirementsTitle: "Requisitos importantes",
		requirement1: "Primero, necesitas instalar la herramienta Gemini CLI",
		requirement2: "Luego, ejecuta gemini en tu terminal y asegúrate de iniciar sesión con Google",
		requirement3: "Solo funciona con cuentas personales de Google (no cuentas de Google Workspace)",
		requirement4: "No usa claves API - la autenticación se maneja vía OAuth",
		requirement5: "Requiere que la herramienta Gemini CLI se instale y autentique primero",
		freeAccess: "Acceso gratuito vía autenticación OAuth",
	},
	fr: {
		description:
			"Ce fournisseur utilise l'authentification OAuth de l'outil Gemini CLI et ne nécessite pas de clés API.",
		oauthPath: "Chemin des identifiants OAuth (optionnel)",
		oauthPathDescription:
			"Chemin vers le fichier d'identifiants OAuth. Laissez vide pour utiliser l'emplacement par défaut (~/.gemini/oauth_creds.json).",
		instructions: "Si vous ne vous êtes pas encore authentifié, exécutez d'abord",
		instructionsContinued: "dans votre terminal.",
		setupLink: "Instructions de configuration Gemini CLI",
		requirementsTitle: "Exigences importantes",
		requirement1: "D'abord, vous devez installer l'outil Gemini CLI",
		requirement2: "Ensuite, exécutez gemini dans votre terminal et assurez-vous de vous connecter avec Google",
		requirement3: "Ne fonctionne qu'avec les comptes Google personnels (pas les comptes Google Workspace)",
		requirement4: "N'utilise pas de clés API - l'authentification est gérée via OAuth",
		requirement5: "Nécessite que l'outil Gemini CLI soit installé et authentifié en premier",
		freeAccess: "Accès gratuit via l'authentification OAuth",
	},
	hi: {
		description: "यह प्रदाता Gemini CLI टूल से OAuth प्रमाणीकरण का उपयोग करता है और API कुंजी की आवश्यकता नहीं है।",
		oauthPath: "OAuth क्रेडेंशियल पथ (वैकल्पिक)",
		oauthPathDescription:
			"OAuth क्रेडेंशियल फ़ाइल का पथ। डिफ़ॉल्ट स्थान (~/.gemini/oauth_creds.json) का उपयोग करने के लिए खाली छोड़ें।",
		instructions: "यदि आपने अभी तक प्रमाणीकरण नहीं किया है, तो कृपया पहले चलाएं",
		instructionsContinued: "अपने टर्मिनल में।",
		setupLink: "Gemini CLI सेटअप निर्देश",
		requirementsTitle: "महत्वपूर्ण आवश्यकताएं",
		requirement1: "पहले, आपको Gemini CLI टूल इंस्टॉल करना होगा",
		requirement2: "फिर, अपने टर्मिनल में gemini चलाएं और सुनिश्चित करें कि आप Google से लॉगिन करें",
		requirement3: "केवल व्यक्तिगत Google खातों के साथ काम करता है (Google Workspace खातों के साथ नहीं)",
		requirement4: "API कुंजी का उपयोग नहीं करता - प्रमाणीकरण OAuth के माध्यम से संभाला जाता है",
		requirement5: "पहले Gemini CLI टूल को इंस्टॉल और प्रमाणित करने की आवश्यकता है",
		freeAccess: "OAuth प्रमाणीकरण के माध्यम से मुफ्त पहुंच",
	},
	id: {
		description: "Penyedia ini menggunakan autentikasi OAuth dari alat Gemini CLI dan tidak memerlukan kunci API.",
		oauthPath: "Jalur Kredensial OAuth (opsional)",
		oauthPathDescription:
			"Jalur ke file kredensial OAuth. Biarkan kosong untuk menggunakan lokasi default (~/.gemini/oauth_creds.json).",
		instructions: "Jika Anda belum mengautentikasi, silakan jalankan",
		instructionsContinued: "di terminal Anda terlebih dahulu.",
		setupLink: "Instruksi Pengaturan Gemini CLI",
		requirementsTitle: "Persyaratan Penting",
		requirement1: "Pertama, Anda perlu menginstal alat Gemini CLI",
		requirement2: "Kemudian, jalankan gemini di terminal Anda dan pastikan Anda masuk dengan Google",
		requirement3: "Hanya bekerja dengan akun Google pribadi (bukan akun Google Workspace)",
		requirement4: "Tidak menggunakan kunci API - autentikasi ditangani melalui OAuth",
		requirement5: "Memerlukan alat Gemini CLI untuk diinstal dan diautentikasi terlebih dahulu",
		freeAccess: "Akses gratis melalui autentikasi OAuth",
	},
	it: {
		description:
			"Questo fornitore utilizza l'autenticazione OAuth dallo strumento Gemini CLI e non richiede chiavi API.",
		oauthPath: "Percorso credenziali OAuth (opzionale)",
		oauthPathDescription:
			"Percorso al file delle credenziali OAuth. Lascia vuoto per utilizzare la posizione predefinita (~/.gemini/oauth_creds.json).",
		instructions: "Se non ti sei ancora autenticato, esegui prima",
		instructionsContinued: "nel tuo terminale.",
		setupLink: "Istruzioni di configurazione Gemini CLI",
		requirementsTitle: "Requisiti importanti",
		requirement1: "Prima, devi installare lo strumento Gemini CLI",
		requirement2: "Poi, esegui gemini nel tuo terminale e assicurati di accedere con Google",
		requirement3: "Funziona solo con account Google personali (non account Google Workspace)",
		requirement4: "Non utilizza chiavi API - l'autenticazione è gestita tramite OAuth",
		requirement5: "Richiede che lo strumento Gemini CLI sia installato e autenticato per primo",
		freeAccess: "Accesso gratuito tramite autenticazione OAuth",
	},
	ja: {
		description: "このプロバイダーはGemini CLIツールのOAuth認証を使用し、APIキーは不要です。",
		oauthPath: "OAuth認証情報パス（オプション）",
		oauthPathDescription:
			"OAuth認証情報ファイルのパス。空のままにするとデフォルトの場所（~/.gemini/oauth_creds.json）が使用されます。",
		instructions: "まだ認証していない場合は、先に実行してください",
		instructionsContinued: "ターミナルで。",
		setupLink: "Gemini CLIセットアップ手順",
		requirementsTitle: "重要な要件",
		requirement1: "まず、Gemini CLIツールをインストールする必要があります",
		requirement2: "次に、ターミナルでgeminiを実行し、Googleでログインすることを確認してください",
		requirement3: "個人のGoogleアカウントでのみ動作します（Google Workspaceアカウントは対象外）",
		requirement4: "APIキーは使用しません - 認証はOAuthで処理されます",
		requirement5: "Gemini CLIツールを先にインストールして認証する必要があります",
		freeAccess: "OAuth認証による無料アクセス",
	},
	ko: {
		description: "이 공급자는 Gemini CLI 도구의 OAuth 인증을 사용하며 API 키가 필요하지 않습니다.",
		oauthPath: "OAuth 자격 증명 경로 (선택사항)",
		oauthPathDescription:
			"OAuth 자격 증명 파일의 경로입니다. 기본 위치 (~/.gemini/oauth_creds.json)를 사용하려면 비워두세요.",
		instructions: "아직 인증하지 않았다면 먼저 실행하세요",
		instructionsContinued: "터미널에서.",
		setupLink: "Gemini CLI 설정 지침",
		requirementsTitle: "중요한 요구사항",
		requirement1: "먼저 Gemini CLI 도구를 설치해야 합니다",
		requirement2: "그런 다음 터미널에서 gemini를 실행하고 Google로 로그인했는지 확인하세요",
		requirement3: "개인 Google 계정에서만 작동합니다 (Google Workspace 계정 제외)",
		requirement4: "API 키를 사용하지 않습니다 - 인증은 OAuth를 통해 처리됩니다",
		requirement5: "Gemini CLI 도구를 먼저 설치하고 인증해야 합니다",
		freeAccess: "OAuth 인증을 통한 무료 액세스",
	},
	nl: {
		description:
			"Deze provider gebruikt OAuth-authenticatie van het Gemini CLI-hulpprogramma en heeft geen API-sleutels nodig.",
		oauthPath: "OAuth-referentiepad (optioneel)",
		oauthPathDescription:
			"Pad naar het OAuth-referentiebestand. Laat leeg om de standaardlocatie te gebruiken (~/.gemini/oauth_creds.json).",
		instructions: "Als je nog niet bent geverifieerd, voer dan eerst uit",
		instructionsContinued: "in je terminal.",
		setupLink: "Gemini CLI Setup-instructies",
		requirementsTitle: "Belangrijke vereisten",
		requirement1: "Eerst moet je het Gemini CLI-hulpprogramma installeren",
		requirement2: "Voer vervolgens gemini uit in je terminal en zorg ervoor dat je inlogt met Google",
		requirement3: "Werkt alleen met persoonlijke Google-accounts (geen Google Workspace-accounts)",
		requirement4: "Gebruikt geen API-sleutels - authenticatie wordt afgehandeld via OAuth",
		requirement5: "Vereist dat het Gemini CLI-hulpprogramma eerst wordt geïnstalleerd en geverifieerd",
		freeAccess: "Gratis toegang via OAuth-authenticatie",
	},
	pl: {
		description: "Ten dostawca używa uwierzytelniania OAuth z narzędzia Gemini CLI i nie wymaga kluczy API.",
		oauthPath: "Ścieżka poświadczeń OAuth (opcjonalnie)",
		oauthPathDescription:
			"Ścieżka do pliku poświadczeń OAuth. Pozostaw puste, aby użyć domyślnej lokalizacji (~/.gemini/oauth_creds.json).",
		instructions: "Jeśli jeszcze się nie uwierzytelniłeś, uruchom najpierw",
		instructionsContinued: "w swoim terminalu.",
		setupLink: "Instrukcje konfiguracji Gemini CLI",
		requirementsTitle: "Ważne wymagania",
		requirement1: "Najpierw musisz zainstalować narzędzie Gemini CLI",
		requirement2: "Następnie uruchom gemini w swoim terminalu i upewnij się, że logujesz się przez Google",
		requirement3: "Działa tylko z osobistymi kontami Google (nie kontami Google Workspace)",
		requirement4: "Nie używa kluczy API - uwierzytelnianie jest obsługiwane przez OAuth",
		requirement5: "Wymaga, aby narzędzie Gemini CLI zostało najpierw zainstalowane i uwierzytelnione",
		freeAccess: "Darmowy dostęp przez uwierzytelnianie OAuth",
	},
	"pt-BR": {
		description: "Este provedor usa autenticação OAuth da ferramenta Gemini CLI e não requer chaves de API.",
		oauthPath: "Caminho das credenciais OAuth (opcional)",
		oauthPathDescription:
			"Caminho para o arquivo de credenciais OAuth. Deixe vazio para usar o local padrão (~/.gemini/oauth_creds.json).",
		instructions: "Se você ainda não se autenticou, execute primeiro",
		instructionsContinued: "no seu terminal.",
		setupLink: "Instruções de configuração do Gemini CLI",
		requirementsTitle: "Requisitos importantes",
		requirement1: "Primeiro, você precisa instalar a ferramenta Gemini CLI",
		requirement2: "Então, execute gemini no seu terminal e certifique-se de fazer login com o Google",
		requirement3: "Funciona apenas com contas pessoais do Google (não contas do Google Workspace)",
		requirement4: "Não usa chaves de API - a autenticação é tratada via OAuth",
		requirement5: "Requer que a ferramenta Gemini CLI seja instalada e autenticada primeiro",
		freeAccess: "Acesso gratuito via autenticação OAuth",
	},
	ru: {
		description:
			"Этот поставщик использует OAuth-аутентификацию от инструмента Gemini CLI и не требует API-ключей.",
		oauthPath: "Путь к учетным данным OAuth (необязательно)",
		oauthPathDescription:
			"Путь к файлу учетных данных OAuth. Оставьте пустым, чтобы использовать расположение по умолчанию (~/.gemini/oauth_creds.json).",
		instructions: "Если вы еще не аутентифицировались, сначала выполните",
		instructionsContinued: "в вашем терминале.",
		setupLink: "Инструкции по настройке Gemini CLI",
		requirementsTitle: "Важные требования",
		requirement1: "Сначала вам нужно установить инструмент Gemini CLI",
		requirement2: "Затем запустите gemini в вашем терминале и убедитесь, что вы входите с Google",
		requirement3: "Работает только с личными аккаунтами Google (не аккаунтами Google Workspace)",
		requirement4: "Не использует API-ключи - аутентификация обрабатывается через OAuth",
		requirement5: "Требует, чтобы инструмент Gemini CLI был сначала установлен и аутентифицирован",
		freeAccess: "Бесплатный доступ через OAuth-аутентификацию",
	},
	tr: {
		description:
			"Bu sağlayıcı, Gemini CLI aracından OAuth kimlik doğrulaması kullanır ve API anahtarları gerektirmez.",
		oauthPath: "OAuth Kimlik Bilgileri Yolu (isteğe bağlı)",
		oauthPathDescription:
			"OAuth kimlik bilgileri dosyasının yolu. Varsayılan konumu kullanmak için boş bırakın (~/.gemini/oauth_creds.json).",
		instructions: "Henüz kimlik doğrulaması yapmadıysanız, lütfen önce çalıştırın",
		instructionsContinued: "terminalinizde.",
		setupLink: "Gemini CLI Kurulum Talimatları",
		requirementsTitle: "Önemli Gereksinimler",
		requirement1: "Önce Gemini CLI aracını yüklemeniz gerekir",
		requirement2: "Sonra terminalinizde gemini çalıştırın ve Google ile giriş yaptığınızdan emin olun",
		requirement3: "Yalnızca kişisel Google hesaplarıyla çalışır (Google Workspace hesapları değil)",
		requirement4: "API anahtarları kullanmaz - kimlik doğrulama OAuth aracılığıyla işlenir",
		requirement5: "Gemini CLI aracının önce yüklenmesi ve kimlik doğrulanması gerekir",
		freeAccess: "OAuth kimlik doğrulaması ile ücretsiz erişim",
	},
	vi: {
		description: "Nhà cung cấp này sử dụng xác thực OAuth từ công cụ Gemini CLI và không yêu cầu khóa API.",
		oauthPath: "Đường dẫn thông tin xác thực OAuth (tùy chọn)",
		oauthPathDescription:
			"Đường dẫn đến tệp thông tin xác thực OAuth. Để trống để sử dụng vị trí mặc định (~/.gemini/oauth_creds.json).",
		instructions: "Nếu bạn chưa xác thực, vui lòng chạy trước",
		instructionsContinued: "trong terminal của bạn.",
		setupLink: "Hướng dẫn thiết lập Gemini CLI",
		requirementsTitle: "Yêu cầu quan trọng",
		requirement1: "Đầu tiên, bạn cần cài đặt công cụ Gemini CLI",
		requirement2: "Sau đó, chạy gemini trong terminal của bạn và đảm bảo bạn đăng nhập bằng Google",
		requirement3: "Chỉ hoạt động với tài khoản Google cá nhân (không phải tài khoản Google Workspace)",
		requirement4: "Không sử dụng khóa API - xác thực được xử lý qua OAuth",
		requirement5: "Yêu cầu công cụ Gemini CLI được cài đặt và xác thực trước",
		freeAccess: "Truy cập miễn phí qua xác thực OAuth",
	},
}

// 目标目录
const targetDir = "../../Roo-Code-3.23.16/webview-ui/src/i18n/locales"

// 补全函数
function complementFile(langCode) {
	const filePath = path.join(targetDir, langCode, "settings.json")

	if (!fs.existsSync(filePath)) {
		console.log(`❌ 文件不存在: ${filePath}`)
		return false
	}

	try {
		const content = fs.readFileSync(filePath, "utf8")
		const data = JSON.parse(content)

		// 检查是否已经有geminiCli配置
		if (data.providers && data.providers.geminiCli) {
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
		if (data.providers && data.providers.claudeCode) {
			data.providers.geminiCli = translation

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
	console.log("🚀 开始批量补全国际化文件...\n")

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
