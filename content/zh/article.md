---
tags: [] # 标签
author: "qianchen"  # 作者
title: "Hello World"  # 标题
date: "2000-01-01"  # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板
draft: false # 是否隐藏（不打包）
hidden: true # 是否隐藏（打包）
description: "这是一个测试帖" # 介绍
# summary: "这是一个测试界面" # 页面描述、面向社交媒体用户
# Keywords: "突触递质,介绍,测试" # 网站关键词（SEO）

cover:
    image: "https://s2.loli.net/2024/03/07/X6w49UasreE3cvH.jpg" # 图片链接
    # alt: "头图" # 替代文本
    # caption: "LOGO" # 介绍文本
    # relative: false # 是否是相对路径
    # hidden: false # 是否隐藏
---
```
print("Hello World")
```
强行换行
&nbsp;

[图片设置](https://github.com/xlzy520/picgo-plugin-bilibili?tab=readme-ov-file#%E5%9B%BE%E7%89%87%E6%A0%B7%E5%BC%8F)

图片（未压缩）
![](https://i0.hdslb.com/bfs/article/4f01d23c165ee2cb42b56922f01d6716293123360.png)
图片（压缩）
![](https://i0.hdslb.com/bfs/article/4f01d23c165ee2cb42b56922f01d6716293123360.png@0c.webp)
图片（压缩设置宽高）
![](https://i0.hdslb.com/bfs/article/4f01d23c165ee2cb42b56922f01d6716293123360.png@100w_200h_0c.webp)
{{< innerlink src="\post\story\lonely.md">}} 

{{< align left "文字居左" >}}
{{< align center "文字居中" >}}
{{< align right "文字居右" >}}

{{< ico moon >}} 图标

### 音乐测试
{{<aplayer server="netease" type="playlist" id="2503443186">}}
<!-- {{< music 2503443186 >}} -->
### 模型添加测试
<!-- {{< three  src="https://github.com/Az-qianchen/announcement/raw/main/godot_doll.glb" ratio=2 grid=false >}} -->
{{< three  src="/model/qube.glb"  high=0  ratio=2 grid=false >}}
### RAW 文件测试
[RAW 文件](/txt/test.txt)
### Shader 测试
{{< shader ldfczS >}}
### Bilibili 视频测试
{{< bilibili BV1Wi42127Mp >}}