# Yeni Icerik Teslim Alani

Yeni blog veya basin yazilarini bu klasore kopyalayabilirsiniz.

Tercih edilen dosya yapisi:

```text
slug-adi.md
slug-adi.jpg
slug-adi-ara-gorsel-1.jpg
```

Kurallar:

- Markdown ve gorsel dosyasinin adi mumkunse ayni `slug` ile baslasin.
- Gorsel `.webp` degilse siteye eklenirken `.webp` formatina cevrilir.
- `image` alanindaki gorsel ana gorseldir.
- Ikinci veya ara gorsel varsa, Markdown icinde kullanilacagi yere standart gorsel satiri olarak ekleyin: `![Alt metin](./slug-adi-ara-gorsel-1.jpg)`.
- Birlikte gonderilen yazilar birbirine link veriyorsa, henuz yayinda olmasa bile planlanan nihai path kullanin: `/blog/slug-adi/` veya `/basinda-biz/slug-adi/`.
- Frontmatter kurallari icin `../CONTENT_GUIDE.md` dosyasini kullanin.
- Icerik siteye eklendikten sonra bu klasorden asil data/assets klasorlerine tasinir.
- Basariyla islenen kaynaklar `processed/slug-tarih/` altina, yayinlanamayacak durumdaki kaynaklar `rejected/slug-tarih/` altina ayrilir.

## Basinda Biz Yukleme Akisi

Bir sonraki `type: press` dosyasi geldiginde tek seferde su adimlari uygulayin:

1. `incoming/` kokunde `README.md` ve `processed/` disinda kalan yeni `.md` veya `.docx` dosyalarini ve ayni slug ile baslayan gorselleri listeleyin.
2. Icerigi okumadan once mevcut kayitlarda ayni veya benzer slug var mi kontrol edin: `src/data/press.generated.json`.
3. Ayni slug varsa ve kaynak farkliysa yeni slug'a kaynak ekleyin. Ornek: `...-comprisetech`. Ayni haber birebir tekrar ise yayinlamayin, kaynak dosyayi processed altina tasimadan once not alin.
4. `.docx` dosyasi geldiyse frontmatter alanlarini metinden cikarin. Word bazen kapanis `---` satirini govdeyle ayni paragrafa koyabilir; bu durumda govdeyi basliktan itibaren elle ayiklayin.
5. Frontmatter hatalarini duzeltin:
   - `title` sonunda fazladan tirnak varsa kaldirin.
   - `category` bos ise `Basinda Biz` kabul edin.
   - `seoTitle` bos ise `title + " - Kobi ai"` kullanin.
   - `seoDescription` bos ise `description` alanini kullanin.
   - Turkce karakterleri ve bozuk encoding'i kontrol edin.
6. Gorseli `public/assets/wp/YYYY/MM/slug.webp` altina `.webp` olarak ekleyin. Slug degistiyse gorsel adini da yeni slug ile ayni yapin.
7. `src/data/press.generated.json` icine yeni kaydi ekleyin:
   - Yeni `id`, mevcut en buyuk `id + 1` olsun.
   - `date`, `title`, `slug`, `excerpt`, `image`, `seoTitle`, `seoDescription`, `content`, `contentHtml`, `terms`, `sourceUrl` alanlarini doldurun.
   - `terms` icin `Basinda Biz` kategorisini kullanin.
   - Kaydi tarih sirasi bozulmayacak sekilde ekleyin.
8. Build alin ve yeni route'un uretildigini kontrol edin:
   - `/basinda-biz/slug/`
   - Baslik, ana gorsel ve varsa `Haberi kaynaginda oku` linki HTML'de gorunmeli.
9. Basarili build sonrasi kaynak `.md/.docx` ve gorselleri `incoming/processed/YYYY-MM-DD/` altina tasiyin.
10. Sadece gerekli dosyalari commit'e alin:
    - `src/data/press.generated.json`
    - yeni `public/assets/wp/YYYY/MM/*.webp`
    - `incoming/processed` gitignore kapsaminda oldugu icin commit'e girmez.
    - `outputs/` klasorunu commit'e eklemeyin.
11. Commit, push, GitHub Pages deploy kontrolu ve canli URL kontrolu yapin.
