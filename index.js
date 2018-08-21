const fs = require('fs')

const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

const css = fs.readFileSync('index.css')

postcss([autoprefixer])
  .process(css, { from: './index.css' })
  .then(function(result) {
    result.warnings().forEach(function(warn) {
      console.warn(warn.toString())
    })
    console.log(result.css)
  })
