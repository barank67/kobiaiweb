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
