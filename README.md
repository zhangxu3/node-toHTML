## 运行脚本

### Author: zhangxu3@genomics.cn 🚀

```bash
# 🥳下载
git clone https://github.com/zhangxu3/node-toHTML.git

# 😉进入目录
cd node-toHTML

# 😋安装依赖
npm install

# 😆运行，*表示json文件路径，测试可使用./test.json
npm html --path=*
```

```bash
// 👉 json 结构和字段
{
  "id": "**" // 作为生成该html的唯一标识
  "data":[
    {
      "filePath":"", // svg/png访问路径
      "description":"" // 描述
    },
    {
      "filePath":"", // svg/png访问路径
      "description":"" // 描述
    }
    // ...
  ]
}
```

> 🚨 生成的 html 会以 result-[id].html 方式命名并传入到集群对应的文件夹内（id 为读取 json 中的 id 字段）
