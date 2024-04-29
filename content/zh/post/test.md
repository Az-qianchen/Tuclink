---
tags: ["test"] # 标签
author: "qianchen"  # 作者
title: "功能测试"  # 标题
date: "2024-04-21"  # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板
draft: true # 是否隐藏
description: "功能测试" # 介绍
hidemeta: false # 是否隐藏元数据

cover:
    image: "https://s2.loli.net/2024/03/07/X6w49UasreE3cvH.jpg" # 图片链接
    hidden: false # 是否隐藏
    # alt: "头图" # 替代文本
    # caption: "LOGO" # 介绍文本
    # relative: false # 是否是相对路径
---
{{< innerlink src="\post\tips\Tips-1.md" >}} 

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