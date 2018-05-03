const developConfig = {
  modules: false,
  plugins: {
  }
}

const productionConfig = {
  modules: true,
  plugins: {
    "postcss-preset-env": {},
    "autoprefixer": {"remove": false}
  }
}

module.exports = process.env.NODE_ENV !== 'production' ? developConfig : productionConfig