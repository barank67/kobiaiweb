# Icerik Ekleme Kurallari

Bu dosya blog ve basin yazilari eklenirken kullanilacak kalici kurallari tanimlar.

## Dosya Formati

Yeni icerikler tercihen Markdown olarak teslim edilir:

```text
yazi-slug.md
yazi-slug.jpg
```

Gorsel dosyasi `.webp` degilse siteye eklenirken `.webp` formatina cevrilir. Gorsel dosya adi mumkunse `slug` ile ayni olmalidir.

## Frontmatter

```md
---
type: blog
title: "Baslik"
slug: "yazi-slug"
date: "2026-06-27"
description: "Kartlarda ve liste sayfalarinda gorunecek kisa ozet."
image: "./yazi-slug.webp"
category: "Blog"
sourceUrl: ""
seoTitle: ""
seoDescription: ""
---
```

## Alan Kurallari

- `type` icerigin nereye eklenecegini belirler.
- `type: blog` ise icerik Blog bolumune eklenir.
- `type: press` ise icerik Basinda Biz bolumune eklenir.
- `type: press` icin `category` bos birakildiysa `Basinda Biz` yapilir.
- `type: blog` icin `category` bos birakildiysa `Blog` yapilir.
- `type: press` olan iceriklerde baslikta `Hurriyet` veya `Hürriyet` geciyorsa Basinda Biz listesinde Hurriyet haberleri grubunda gosterilir.
- Hurriyet haberleri kendi icinde en yeni tarih once olacak sekilde siralanir; yeni Hurriyet haberi bu nedenle en basa gelir.
- `type: press` olan ve basliginda Hurriyet gecmeyen yeni icerikler Hurriyet haberlerinin arkasina, kendi tarih sirasina gore eklenir.
- `description` kartlarda ve liste sayfalarinda kullanilan kisa ozettir.
- `seoTitle` bos birakildiysa otomatik olarak `title + " - Kobi ai"` yapilir.
- Marka yazimi SEO basliginda `Kobi ai` olarak kullanilir.
- `seoDescription` bos birakildiysa `description` kullanilir.
- `seoDescription` yoksa ve `description` uzunsa yaklasik 150 karakterlik anlamli bir alinti olusturulur.
- `seoDescription` hedef uzunlugu 140-160 karakterdir.
- `sourceUrl` sadece dis kaynakta yayinlanan basin/haber yazilari icin doldurulur.

## Dil ve Yazi Kontrolu

- Icerik siteye alinmadan once Turkce imla, harf ve karakter kodlama hatalari kontrol edilir.
- Bozuk karakterler (`KOBÄ°`, `Ã§`, `ÅŸ`, `Ä±` gibi) varsa icerik yayinlanmadan once duzeltilir.
- Marka yazimlari tutarli hale getirilir: metin icinde mevcut site standardi korunur, SEO basliginda `Kobi ai` kullanilir.
- Bariz yazim hatalari duzeltilir; anlam degistirebilecek duzeltmeler kullaniciya sorulur.

## Gorsel Kurallari

- JPEG, PNG veya AVIF gorsel verilebilir.
- Siteye eklenirken tercih edilen format `.webp`tir.
- Gorsel `.webp` degilse `.webp` formatina cevrilir.
- Gorsel dosya adi `slug` ile ayni tutulur.
- Orijinal gorsel cok buyukse web icin optimize edilir.

## Incoming Isleme Kurali

- Yeni dosyalar once `incoming/` klasorune kopyalanir.
- Icerik siteye basariyla eklendikten sonra kaynak `.md` ve gorsel `incoming/processed/slug-tarih/` altina tasinir.
- Karakter kodlama, eksik gorsel, eksik slug veya benzeri nedenle yayinlanamayacak dosyalar `incoming/rejected/slug-tarih/` altina tasinir ya da duzeltilene kadar `incoming/` icinde birakilir.
- Ayni slug ile yeni dosya geldiginde karismamasi icin islenen dosyalar `incoming/` kokunde tutulmaz.

## Link Kurallari

Markdown icinde link kullanilabilir:

```md
[Yapay Zeka ile Satin Alma](https://kobiai.com.tr/yapay-zeka-ile-satin-alma/)
```

Site ici linklerde mumkunse tam canli URL veya kokten baslayan path kullanilir.

## Ornek: Basin Yazisi

```md
---
type: press
title: "KOBI'lerin Yeni Calisani Yapay Zeka Olacak"
slug: "kobilerin-yeni-calisani-yapay-zeka-olacak"
date: "2026-06-27"
description: "Yapay zeka, KOBI'lerde dijital ekip arkadasina donuserek kucuk ekiplerin daha buyuk operasyonlari yonetmesini sagliyor."
image: "./kobilerin-yeni-calisani-yapay-zeka-olacak.webp"
category: "Basinda Biz"
sourceUrl: ""
seoTitle: "KOBI'lerin Yeni Calisani Yapay Zeka Olacak - Kobi ai"
seoDescription: "Yapay zeka, KOBI'lerde dijital ekip arkadasina donuserek kucuk ekiplerin daha buyuk cirolari ve operasyonlari yonetmesini sagliyor."
---
```

## Ornek: Minimum Frontmatter

Bu sekilde de gonderilebilir; eksik alanlar kurallara gore tamamlanir:

```md
---
type: press
title: "KOBI'lerin Yeni Calisani Yapay Zeka Olacak"
slug: "kobilerin-yeni-calisani-yapay-zeka-olacak"
date: "2026-06-27"
description: "Yapay zeka, KOBI'lerde dijital ekip arkadasina donuserek kucuk ekiplerin daha buyuk operasyonlari yonetmesini sagliyor."
image: "./kobilerin-yeni-calisani-yapay-zeka-olacak.jpg"
---
```
