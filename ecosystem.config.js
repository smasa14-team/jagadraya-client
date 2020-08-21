module.exports = {
  apps: [
    {
      name: "jagadraya-client", // ubah sesuai nama aplikasi yang dibuat

      script: "npx",

      // ubah 63001 sesuai port yg dipakai di .htaccess

      args: "serve -l 63001 build",

      interpreter: "none",

      watch: true,

      merge_logs: true,

      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
