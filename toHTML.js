const fs = require('fs')
const ejs = require('ejs') //引入ejs

const args = process.argv.slice(2)[0]
console.log('args', args)
if (!args) {
  throw new Error('参数错误，请检查json路径')
}
console.log(args)
const json = fs.readFileSync(args)
try {
  const { id, data } = JSON.parse(json)
  // 编译ejs模板生成html文件
  ejs.renderFile('./template.ejs', { data }, function (err, res) {
    if (err) throw err
    fs.writeFile(`result-${id}.html`, res, function (err) {
      if (err) throw err
      console.log('The HTML has been generated!')
      // 上传html
    })
  })
} catch (error) {
  throw error
}
