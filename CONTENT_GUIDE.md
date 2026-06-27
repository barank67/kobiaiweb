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
- `description` kartlarda ve liste sayfalarinda kullanilan kisa ozettir.
- `seoTitle` bos birakildiysa otomatik olarak `title + " - Kobi ai"` yapilir.
- Marka yazimi SEO basliginda `Kobi ai` olarak kullanilir.
- `seoDescription` bos birakildiysa `description` kullanilir.
- `seoDescription` yoksa ve `description` uzunsa yaklasik 150 karakterlik anlamli bir alinti olusturulur.
- `seoDescription` hedef uzunlugu 140-160 karakterdir.
- `sourceUrl` sadece dis kaynakta yayinlanan basin/haber yazilari icin doldurulur.

## Gorsel Kurallari

- JPEG, PNG veya AVIF gorsel verilebilir.
- Siteye eklenirken tercih edilen format `.webp`tir.
- Gorsel `.webp` degilse `.webp` formatina cevrilir.
- Gorsel dosya adi `slug` ile ayni tutulur.
- Orijinal gorsel cok buyukse web icin optimize edilir.

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
