# uzmanumre.com / uzmanumre.com.tr — Prod Kurulum

Prod'da **Docker yok** — pm2 (veya systemd) + nginx.
Sunucu: `ssh ts` (server.uzmanumre.com, public IP 89.252.179.99).
Port: **3302** (3301 = podcast-api ile çakışmaz).

## 0) DNS (Turhost panelinden)

| Kayıt | Tür | Değer |
|---|---|---|
| uzmanumre.com | A | 89.252.179.99 |
| www.uzmanumre.com | A | 89.252.179.99 |
| uzmanumre.com.tr | A | 89.252.179.99 |
| www.uzmanumre.com.tr | A | 89.252.179.99 |

> `api.` ve `admin.` kayıtlarına DOKUNMA — mevcut podcast backend/admin bunlarda.

## 1) Kodu sunucuya al

```bash
ssh ts
cd /var/www
git clone git@github.com:metinemredonmez/uzman-web.git uzman-web
cd uzman-web
npm ci
npm run build
```

## 2) SSL sertifikası (4 alan tek sertifikada)

```bash
certbot certonly --nginx --cert-name uzmanumre-web \
  -d uzmanumre.com -d www.uzmanumre.com \
  -d uzmanumre.com.tr -d www.uzmanumre.com.tr
```

> Not: api/admin.uzmanumre.com sertifikalarında renewal config eksikti —
> bu yeni sertifikadan sonra `certbot renew --dry-run` ile hepsini doğrula.

## 3) nginx

```bash
cp deploy/nginx-uzmanumre-web.conf /etc/nginx/sites-available/uzmanumre-web
ln -s /etc/nginx/sites-available/uzmanumre-web /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## 4) Uygulamayı başlat — pm2 (önerilen)

```bash
pm2 start deploy/ecosystem.config.js
pm2 save
```

systemd tercih edilirse: `deploy/uzmanumre-web.service` içindeki yönergeler.

## 5) Güncelleme (sonraki deploylar)

```bash
ssh ts "cd /var/www/uzman-web && git pull && npm ci && npm run build && pm2 restart uzmanumre-web"
```

## Kontroller

```bash
curl -I https://uzmanumre.com                    # 200
curl -I https://uzmanumre.com.tr                 # 301 -> uzmanumre.com
curl -I https://www.uzmanumre.com                # 301 -> uzmanumre.com
curl -s https://uzmanumre.com/en | head -c 200   # EN sayfa
```

## Diller

`/` (TR), `/en`, `/de`, `/nl`, `/fr`, `/ru`, `/ar` (RTL) — hepsi statik üretilir (SSG),
hreflang etiketleri otomatik.
