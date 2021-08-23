module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    dependencies: {
      "vue": "^2.6.11",
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^6.7.2",
      "eslint-plugin-vue": "^6.1.2",
    }
  });
  api.render('./template');
};