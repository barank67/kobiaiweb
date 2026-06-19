import solutionsGenerated from "./solutions.generated.json";

const solutionContentBySlug = new Map(solutionsGenerated.map((solution) => [solution.slug, solution]));

const baseSolutionPages = [
  {
    title: "Yapay Zeka ile Satın Alma",
    slug: "yapay-zeka-ile-satin-alma",
    text: "Stok, tedarikçi, teklif ve sipariş kararlarını yapay zeka destekli analizlerle daha kontrollü yönetin.",
    detail:
      "Kobi AI, geçmiş tüketim verileri, mevsimsel trendler, tedarikçi performansı ve üretim planlarını birlikte değerlendirerek satın alma ekipleri için uygulanabilir sipariş önerileri üretir.",
    benefits: ["Stok fazlası ve stok yokluğu riskini azaltır", "Tedarikçi tekliflerini karşılaştırmayı hızlandırır", "Satın alma kararlarını ölçülebilir veriye bağlar"]
  },
  {
    title: "Yapay Zeka ile Karlılık Optimizasyonu",
    slug: "yapay-zeka-ile-karlilik-optimizasyonu",
    text: "Fiyatlama, maliyet ve karlılık kararlarında veriye dayalı senaryolarla daha doğru aksiyon alın.",
    detail:
      "Fiyatlama kararlarını etkileyen maliyet, talep, rekabet ve müşteri davranışı sinyallerini tek bakışta analiz ederek işletmenize özel karlılık senaryoları oluşturur.",
    benefits: ["Optimum fiyatlama stratejilerini görünür kılar", "Marj kaybı riskini erken yakalar", "Finans ve satış ekiplerini aynı veri üzerinde buluşturur"]
  },
  {
    title: "Yapay Zeka Asistanı",
    slug: "yapay-zeka-asistani",
    text: "Müşteri iletişimi, satış desteği ve bilgi erişimi için işletmenize özel çalışan yapay zeka asistanı kurun.",
    detail:
      "Ürün, hizmet ve süreç bilgilerinizi öğrenen yapay zeka asistanı; müşterilerinizin ve ekiplerinizin sorularına günün her saati tutarlı cevaplar verebilir.",
    benefits: ["7/24 müşteri iletişimi sağlar", "Tekrarlı soruları otomatik karşılar", "Satış ve destek ekiplerinin iş yükünü azaltır"]
  },
  {
    title: "Üretim Planlama",
    slug: "uretim-planlama",
    text: "Stok, kapasite, sipariş ve teslim tarihlerini birlikte değerlendirerek üretim planlamasını güçlendirin.",
    detail:
      "Üretim planlama ajanları, kapasite kullanımını, malzeme ihtiyaçlarını ve teslim tarihlerini analiz ederek daha isabetli planlama kararları alınmasına yardımcı olur.",
    benefits: ["Teslim tarihi sapmalarını azaltır", "Kapasite ve stok dengesini izlenebilir hale getirir", "Planlama ekibine erken uyarı sinyalleri verir"]
  },
  {
    title: "İş Akışı",
    slug: "is-akisi",
    text: "Tekrarlı operasyon adımlarını ajan destekli iş akışlarına dönüştürerek ekiplerin hızını artırın.",
    detail:
      "Kobi AI iş akışı çözümleri; onay, takip, raporlama ve veri toplama gibi tekrarlı adımları otomatikleştirerek operasyonların daha tutarlı ilerlemesini sağlar.",
    benefits: ["Tekrarlı işleri azaltır", "Süreç sahipliğini netleştirir", "Raporlama ve takip disiplinini artırır"]
  },
  {
    title: "Yapay Zeka Danışmanlığı",
    slug: "yapay-zeka-danismanligi",
    text: "Şirketiniz için doğru yapay zeka kullanım alanlarını belirleyip uygulanabilir yol haritası oluşturun.",
    detail:
      "Süreç analizi, veri hazırlığı, ajan tasarımı ve pilot uygulama adımlarını birlikte ele alarak yapay zeka yatırımının iş hedefleriyle uyumlu ilerlemesini sağlarız.",
    benefits: ["Öncelikli kullanım alanlarını netleştirir", "Pilot projeleri ölçülebilir kılar", "Ekiplerin yapay zekayı benimsemesini kolaylaştırır"]
  },
  {
    title: "Agentic AI Teklif Asistanı",
    slug: "agentic-ai-teklif-asistani",
    text: "Teklif hazırlama, karşılaştırma ve takip süreçlerinde ajan destekli hız ve kontrol kazanın.",
    detail:
      "Teklif asistanı; müşteri ihtiyacı, geçmiş teklifler, ürün bilgisi ve fiyatlama kurallarını birlikte değerlendirerek satış ekiplerinin daha hızlı ve tutarlı teklif üretmesine yardımcı olur.",
    benefits: ["Teklif hazırlama süresini kısaltır", "Standart dışı teklif riskini azaltır", "Satış takibini daha görünür hale getirir"]
  }
];

export const solutionPages = baseSolutionPages.map((solution) => ({
  ...solution,
  ...solutionContentBySlug.get(solution.slug)
}));

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/hakkimizda/",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda/" },
      { label: "İş Ortaklarımız", href: "/is-ortaklarimiz/" },
      { label: "Bize Ulaşın", href: "/#iletisim" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi/" }
    ]
  },
  {
    label: "Çözümlerimiz",
    href: "/cozumler/",
    children: solutionPages.map(({ title, slug }) => ({ label: title, href: `/cozumler/${slug}/` }))
  },
  { label: "Neden Kobi AI?", href: "/#neden" },
  { label: "Basında Biz", href: "/basinda-biz/" },
  { label: "Blog", href: "/blog/" },
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

export const solutions = [
  {
    ...solutionPages[0],
    title: "Satın Alma Süreçlerinde Tam Optimizasyon"
  },
  {
    ...solutionPages[1],
    title: "Finansal Kontrol ve Tahminleme"
  },
  {
    title: "Satış Operasyonlarında Akıllı Takip",
    slug: "agentic-ai-teklif-asistani",
    text: "Fırsatları, görüşmeleri ve teklifleri satış ekibiniz için eyleme dönüştüren ajanlarla yönetin."
  },
  {
    title: "Pazarlama İçerik ve Segmentasyon",
    slug: "is-akisi",
    text: "Hedef kitle, kampanya fikri ve içerik üretimini şirket dilinizle tutarlı şekilde ölçekleyin."
  },
  {
    ...solutionPages[3],
    title: "Üretim Planlama Desteği"
  },
  {
    title: "Yönetim Karar Destek Paneli",
    slug: "yapay-zeka-danismanligi",
    text: "Departmanlardan gelen sinyalleri özetleyen, önceliklendiren ve aksiyon öneren yönetim görünümü kurun."
  }
];

export const whyItems = [
  {
    title: "KOBİ Odaklı Kurgu",
    text: "Kurumsal yapay zeka yaklaşımını KOBİ bütçesi, ekip yapısı ve operasyon gerçekleriyle uyumlu hale getiriyoruz."
  },
  {
    title: "Ajan Tabanlı İş Akışları",
    text: "Tek seferlik araçlar yerine muhasebe, finans, satış ve satın alma süreçlerine yerleşen kalıcı ajanlar tasarlıyoruz."
  },
  {
    title: "Ölçülebilir Dönüşüm",
    text: "Her projeyi zaman kazancı, hata azalması, maliyet kontrolü ve gelir etkisi üzerinden takip edilebilir kılıyoruz."
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
