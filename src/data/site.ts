import solutionsGenerated from "./solutions.generated.json";

const solutionContentBySlug = new Map(solutionsGenerated.map((solution) => [solution.slug, solution]));

const baseSolutionPages = [
  {
    title: "Satın Alma Süreçlerinde Tam Optimizasyon",
    slug: "yapay-zeka-ile-satin-alma",
    text: "Stok, sipariş ve teslimat döngünüzü analiz ederek işletmenize özel, zamanında ve doğru miktarda satın alma listeleri oluşturur. Fazla stoktan ve ürün eksikliğinden doğan kayıpları önler.",
    detail:
      "Kobi AI, geçmiş tüketim verileri, mevsimsel trendler, tedarikçi performansı ve üretim planlarını birlikte değerlendirerek satın alma ekipleri için uygulanabilir sipariş önerileri üretir.",
    benefits: ["Stok fazlası ve stok yokluğu riskini azaltır", "Tedarikçi tekliflerini karşılaştırmayı hızlandırır", "Satın alma kararlarını ölçülebilir veriye bağlar"]
  },
  {
    title: "Agentic AI (Otonom Yapay Zeka Ekipleri)",
    slug: "agentic-ai-otonom-yapay-zeka-ekipleri",
    text: "İhtiyacınıza özel AI Agent’lar tasarlıyor, birbirleriyle entegre çalıştırıyor ve iş süreçlerinizi 7/24 otonom hale getiriyoruz.",
    detail:
      "Kobi AI, işletmenizin veri kaynaklarını ve karar akışlarını analiz ederek birlikte çalışan yapay zeka ajanları tasarlar. Bu ajanlar görevleri takip eder, karar önerileri üretir ve süreçleri insan kontrolünü koruyarak otomatikleştirir.",
    benefits: ["Departmanlar arasında koordineli çalışan ajan ekipleri kurar", "7/24 takip ve aksiyon önerisi üretir", "Tekrarlı operasyon yükünü azaltır"]
  },
  {
    title: "Yapay Zeka ile Teklif Asistanı",
    slug: "agentic-ai-teklif-asistani",
    text: "Müşteriye özel hesaplamalar, anlık koşullar ve karmaşık değişkenlerle teklif süreçlerinizi hızlandıran Agentic AI destekli teklif asistanı.",
    detail:
      "Kobi AI Teklif Asistanı, ERP, stok, fiyat, iskonto, nakliye, marj, termin ve finansal verileri birlikte değerlendirerek müşteriye özel teklifleri hızlı ve hatasız hazırlamanıza yardımcı olur.",
    benefits: ["Teklif taleplerine anında dönüş sağlar", "Karmaşık teklif hesaplamalarında hata riskini azaltır", "Satış sonrası takip ve onay süreçlerini destekler"]
  },
  {
    title: "İşletmenize Özel Akıllı Asistan",
    slug: "akilli-asistan",
    sourceSlug: "yapay-zeka-asistani",
    text: "Yapay zeka tabanlı chatbot, müşteri sorularını anında yanıtlar, satış süreçlerini hızlandırır ve operasyonel yükü azaltır. Müşteri memnuniyetini artırırken ekiplerinize zaman kazandırır.",
    detail:
      "Ürün, hizmet ve süreç bilgilerinizi öğrenen yapay zeka asistanı; müşterilerinizin ve ekiplerinizin sorularına günün her saati tutarlı cevaplar verebilir.",
    benefits: ["7/24 müşteri iletişimi sağlar", "Tekrarlı soruları otomatik karşılar", "Satış ve destek ekiplerinin iş yükünü azaltır"]
  },
  {
    title: "Otomatik ve Koordine İş Akışları",
    slug: "is-akisi",
    text: "Yazılımlarınızdan aldığı verilerle tüm iş süreçlerini uçtan uca planlar, takip eder ve yönlendirir. İş gücünüzü doğru yerde, doğru zamanda kullanmanızı sağlar.",
    detail:
      "Kobi AI iş akışı çözümleri; onay, takip, raporlama ve veri toplama gibi tekrarlı adımları otomatikleştirerek operasyonların daha tutarlı ilerlemesini sağlar.",
    benefits: ["Tekrarlı işleri azaltır", "Süreç sahipliğini netleştirir", "Raporlama ve takip disiplinini artırır"]
  },
  {
    title: "Dinamik Üretim Planlaması",
    slug: "uretim-planlama",
    text: "Üretim hattındaki verileri anlık olarak değerlendirir, koşullar değiştiğinde üretim planlarını saniyeler içinde günceller. Verimlilikte süreklilik ve minimum hata ile üretim sağlanır.",
    detail:
      "Üretim planlama ajanları, kapasite kullanımını, malzeme ihtiyaçlarını ve teslim tarihlerini analiz ederek daha isabetli planlama kararları alınmasına yardımcı olur.",
    benefits: ["Teslim tarihi sapmalarını azaltır", "Kapasite ve stok dengesini izlenebilir hale getirir", "Planlama ekibine erken uyarı sinyalleri verir"]
  },
  {
    title: "Yapay Zeka Strateji ve Uygulama Danışmanlığı",
    slug: "yapay-zeka-danismanligi",
    text: "İhtiyacınıza özel yapay zeka çözümlerini belirler, uygulama sürecini uçtan uca yönetiriz. Teknolojiyi karmaşık olmaktan çıkarır, işinize değer katan bir araca dönüştürürüz.",
    detail:
      "Süreç analizi, veri hazırlığı, ajan tasarımı ve pilot uygulama adımlarını birlikte ele alarak yapay zeka yatırımının iş hedefleriyle uyumlu ilerlemesini sağlarız.",
    benefits: ["Öncelikli kullanım alanlarını netleştirir", "Pilot projeleri ölçülebilir kılar", "Ekiplerin yapay zekayı benimsemesini kolaylaştırır"]
  }
];

export const solutionPages = baseSolutionPages.map(({ sourceSlug, ...solution }) => ({
  ...(solutionContentBySlug.get(sourceSlug ?? solution.slug) ?? {}),
  ...solution,
  href: `/${solution.slug}/`
}));

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/hakkimizda/",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda/" },
      { label: "İş Ortaklarımız", href: "/is-ortaklarimiz/" },
      { label: "İş Ortağımız Olun", href: "/is-ortagimiz-olun/" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi/" }
    ]
  },
  {
    label: "Çözümlerimiz",
    href: "/cozumler/",
    children: solutionPages.map(({ title, href }) => ({ label: title, href }))
  },
  { label: "Blog", href: "/blog/" },
  { label: "Basında Biz", href: "/basinda-biz/" },
  { label: "İletişim", href: "/#iletisim" }
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kobiai/", icon: "/assets/social/linkedin.svg" },
  { label: "Instagram", href: "https://www.instagram.com/kobiai.ltd/", icon: "/assets/social/instagram.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@Kobiai-ltd", icon: "/assets/social/youtube.svg" },
  { label: "Facebook", href: "https://www.facebook.com/people/Kobiai/61582619828142/", icon: "/assets/social/facebook.svg" }
];

export const agents = [
  "Muhasebe Ajanı",
  "Finans Ajanı",
  "Satış Ajanı",
  "Satın Alma Ajanı",
  "Pazarlama Ajanı",
  "Teklif Ajanı",
  "Üretim Planlama Ajanı",
  "Yönetim Ajanı"
];

export const techLogos = [
  { name: "Anaconda", src: "/assets/logos/anaconda.svg" },
  { name: "Google Cloud", src: "/assets/logos/google-cloud.svg" },
  { name: "Python", src: "/assets/logos/python.svg" },
  { name: "Azure", src: "/assets/logos/azure.svg" },
  { name: "AWS", src: "/assets/logos/aws.svg" },
  { name: "ChatGPT", src: "/assets/logos/chatgpt.svg" },
  { name: "Gemini", src: "/assets/logos/gemini.svg" },
  { name: "Claude", src: "/assets/logos/claude.svg" }
];

const homeSolutionSlugs = new Set([
  "yapay-zeka-ile-satin-alma",
  "agentic-ai-otonom-yapay-zeka-ekipleri",
  "akilli-asistan",
  "is-akisi",
  "uretim-planlama",
  "yapay-zeka-danismanligi"
]);

export const solutions = solutionPages
  .filter(({ slug }) => homeSolutionSlugs.has(slug))
  .map(({ title, slug, href, text }) => ({ title, slug, href, text }));

export const whyItems = [
  {
    title: "Derin Uzmanlık, Güçlü Ekip",
    text: "Yapay zeka, yazılım geliştirme ve kurumsal dönüşüm alanlarında 35 yılı aşkın tecrübe. 10’dan fazla sektörde, 500+ başarılı kurulum gerçekleştirmiş uzman kadro."
  },
  {
    title: "Verinizden Güce Dönüşen Çözümler",
    text: "SAP, Logo, Netsis gibi sistemlerdeki verileriniz, yapay zeka destekli analizlerle işletmenize özel katma değere dönüşür. Hazırdaki verinizle fark yaratın."
  },
  {
    title: "Somut Katma Değer, Ölçülebilir Kazanç",
    text: "Zaman, maliyet ve kârlılık avantajları sadece iddia değil, verilerle ispatlı. İşletmenizin performansını gerçek sonuçlarla ölçün."
  }
];

export const discoveryItems = [
  {
    number: "01",
    title: "Akıllı Sipariş",
    text: "Doğru zamanda, doğru miktarda sipariş verin, optimum stokla çalışın."
  },
  {
    number: "02",
    title: "Akıllı Üretim",
    text: "Daha hızlı planlama, daha az hata, maksimum verimlilik sağlayın."
  },
  {
    number: "03",
    title: "Yüksek Karlılık",
    text: "Akıllı fiyatlama ve gerçek maliyet analizi ile maksimum karlılığa ulaşın."
  },
  {
    number: "04",
    title: "Sürdürülebilirlik",
    text: "Verimliliği artırarak uzun vadeli başarıyı garanti altına alın."
  }
];

export const yesQuestions = [
  "Satışı değişken ürünlere uygun çözümünüz var mı?",
  "Farklı tedarikçilerden farklı periyotlarda sipariş verilmesine uygun çözümünüz var mı?",
  "Talepteki ani değişimlere uyum sağlayan çözümünüz var mı?",
  "Üretim planlamaya bakarak satın alma planlayan çözümünüz var mı?",
  "Son aşamaya gelmiş satış tekliflerine bakarak satın alma planlayan çözümünüz var mı?",
  "Hangi ürün, hangi müşteriye, hangi fiyatla satılmalı?",
  "Piyasa koşulları, faizler, kur riski arttığında buna uygun fiyatlama?",
  "Rekabet koşullarına uygun fiyatlama?",
  "Stokta ne zaman, ne kadar bulunmalı?",
  "Hangi ürün için ne zaman sipariş verilmeli?",
  "Fazla stok yükünden nasıl kurtulurum?",
  "Eksik ürün nedeniyle müşteri kaybetmemek için ne yapmalıyım?",
  "Hangi ürün, hangi müşteriye, hangi fiyatla satılmalı?",
  "Piyasa koşulları, faizler, kur riski arttığında buna uygun fiyatlama?",
  "Rekabet koşullarına uygun fiyatlama?",
  "Müşteri bazında risk analizi?"
];

export const testimonials = [
  {
    title: '"Yeni sistem sayesinde müşteri siparişlerini çok daha hızlı teslim edebiliyoruz."',
    text: "Yapay zeka destekli planlama sistemimize geçtikten sonra, sipariş-teslimat süreçlerimizde dramatik bir hızlanma yaşadık. Eskiden manuel olarak günler süren planlama işlemleri, artık sadece birkaç saat içinde tamamlanıyor. Sistem, binlerce siparişi eş zamanlı analiz ederek en optimal üretim ve teslimat planını otomatik olarak oluşturuyor. Bu sayede müşterilerimize verdiğimiz teslimat sürelerini kısalttık ve taahhütlerimizi çok daha güvenilir bir şekilde yerine getiriyoruz. Üretim aksaksız ilerliyor, stok yönetimi optimize çalışıyor ve sonuçta müşteri memnuniyetimiz önemli ölçüde arttı.",
    name: "Diğdem Polat",
    role: "Bonfiglioli Tedarik Zinciri Müdürü"
  },
  {
    title: '"Kobi AI ile çalışmak operasyonel verimliliğimizi arttırdı ve karmaşık süreçleri çok daha basit hale getirdi."',
    text: "Kobi AI ekibi ilk toplantımızdan itibaren ihtiyaçlarımızı anladı ve çözüm önerileri getirdi ayrıca her adımda sorularımızı titizlikle yanıtladılar. Dijital dönüşüm macerasına atılmak isteyen ama nereden başlayacağını bilmeyen kobilere Kobi AI ile tanışmalarını öneriyorum.",
    name: "Defne Erbilek",
    role: "Kortek, Business Development Manager"
  },
  {
    title: '"Yeni raporlar sayesinde fiyatlarımızı daha rekabetçi belirleyebiliyoruz."',
    text: "Yapay zeka destekli raporlama sistemimiz sayesinde, artık fiyatlandırma kararlarımızı tahminlere değil, somut verilere dayandırıyoruz. Piyasa dinamiklerini, rakip fiyatlarını, müşteri davranışlarını ve maliyet yapımızı anlık olarak analiz eden raporlarımız, her ürün ve müşteri için en uygun fiyat noktasını belirlememizi sağlıyor.",
    name: "İsmail KOÇ",
    role: "RMG GAZ, CEO"
  }
];

export const posts = [
  {
    title: "Satın Almada Agentic AI Dönemi",
    excerpt: "Teklif toplama, tedarikçi analizi ve karar destek süreçlerinde ajanların yarattığı fark.",
    image: "/assets/images/blog-satinalma.webp",
    href: "/blog/satin-almada-agentic-ai/"
  },
  {
    title: "KOBİ'ler İçin Yapay Zeka Ajanları",
    excerpt: "Küçük ekiplerin tekrarlı işleri azaltmak için ajanları nasıl konumlandırabileceği.",
    image: "/assets/images/blog-kobi-ai.webp",
    href: "/blog/kobiler-icin-yapay-zeka-ajanlari/"
  },
  {
    title: "Finans Ekiplerinde Otomasyon",
    excerpt: "Raporlama, nakit akışı ve risk sinyallerinde insan kontrolünü koruyan otomasyon yaklaşımı.",
    image: "/assets/images/blog-finans.webp",
    href: "/blog/finans-ekiplerinde-otomasyon/"
  }
];
