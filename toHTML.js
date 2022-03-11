const fs = require('fs')
const ejs = require('ejs') //引入ejs

const args = process.argv.slice(2)

try {
  const path = args[0]
  console.log('path:', path)
  const json = fs.readFileSync(path)
  try {
    const { data, output } = JSON.parse(json)
    console.log('output:', output)
    // 编译ejs模板生成html文件
    ejs.renderFile('./template.ejs', { data }, function (err, res) {
      if (err) throw err
      fs.writeFile(`${output}result.html`, res, function (err) {
        if (err) throw err
        console.log('The HTML has been generated!')
        // 上传html
      })
    })
  } catch (error) {
    throw error
  }
} catch (err) {
  throw err
}
