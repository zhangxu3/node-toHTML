## 运行脚本

### Author: zhangxu3@genomics.cn

```bash
# 下载
git clone https://github.com/caoxiemeihao/electron-vue-vite.git

# 进入目录
cd node-toHTML

# 安装依赖
npm install

# 运行，*表示json文件路径
npm html --path=*
```

> 👉 生成的 html 会以 result-[id].html 方式命名并传入到集群对应的文件夹内（id 为读取 json 中的 id 字段）
