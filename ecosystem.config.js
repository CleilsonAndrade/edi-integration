module.exports = {
  apps: [
    {
      name: 'edi-integration',
      script: 'dist/main.js',
      watch: false,
      instances: true,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}