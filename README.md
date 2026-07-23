# uzmanumre_web

uzmanumre.com / uzmanumre.com.tr — Uzman Umre uygulamasının çok dilli tanıtım sitesi.

- **Stack:** Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 · shadcn/ui (base-nova)
- **Diller:** `/` TR · `/en` · `/de` · `/nl` · `/fr` · `/ru` · `/ar` (RTL) — hepsi SSG, hreflang otomatik
- **İçerik sözlükleri:** `lib/locales/*.ts` (tek şema: `lib/i18n.ts` → `Dict`)

## Lokal geliştirme

```bash
npm run dev          # http://localhost:3000
npm run build && npm start
```

### Docker (yalnızca lokal — prod'da Docker YOK)

```bash
cd docker
docker compose up -d           # web (3400) + postgres (5433) + redis (6380)
docker compose up -d db redis  # ileride admin/API için sadece altyapı
```

DB ve Redis şu an site tarafından kullanılmıyor; ileride eklenecek admin/API için hazır.

## Prod

pm2 (veya systemd) + nginx, port **3302**. Adım adım: [deploy/DEPLOY.md](deploy/DEPLOY.md)

## Yapı

```
app/            → / (TR) ve /[lang] rotaları
components/site → navbar, hero, phone (CSS mockuplar), features, showcase, tours, faq, footer, mobile-bar
lib/locales     → tr, en, de, nl, fr, ru, ar sözlükleri
deploy/         → nginx conf, pm2 ecosystem, systemd unit, DEPLOY.md
docker/         → lokal compose (web + postgres + redis)
public/brand    → app-icon, uzman-logo · public/umre-rehberi.pdf
```
