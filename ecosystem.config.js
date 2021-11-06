module.exports = {
    apps : [{
      name: "todo-api",
      script: "./dist/start.js",
      instances: 1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }