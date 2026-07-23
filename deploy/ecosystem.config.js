// pm2 ile prod: pm2 start deploy/ecosystem.config.js
// Sunucudaki diğer uygulamalarla port çakışmasın diye 3302 seçildi
// (3301 = podcast-api). Nginx bu porta proxy'ler.
module.exports = {
  apps: [
    {
      name: "uzmanumre-web",
      cwd: "/var/www/uzman-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3302",
      env: {
        NODE_ENV: "production",
        PORT: "3302",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      out_file: "/var/log/pm2/uzmanumre-web.out.log",
      error_file: "/var/log/pm2/uzmanumre-web.err.log",
    },
  ],
};
