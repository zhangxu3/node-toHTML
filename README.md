## 运行脚本

### Author: zhangxu3@genomics.cn 🚀

```bash
# 准备 安装node环境

# 下载
git clone https://github.com/zhangxu3/node-toHTML.git

# 进入目录
cd node-toHTML

# 安装依赖
npm install

# 运行，*表示读取的json文件路径
npm run html --json=*
```

```bash
// 👉 json 结构和字段
{
  "title": "**", // 报告标题
  "output":"", // html输出路径
  "data":[
    {
      "path":"", // svg/png路径
      "description":"" // 图片描述
    }
    // ...
  ]
}
```
