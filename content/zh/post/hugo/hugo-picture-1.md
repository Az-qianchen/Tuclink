---
tags: ["Hugo"] # 标签
author: "仟尘" # 作者
title: "Hugo 图库 lightgallerys 方案" # 标题
date: "2024-04-28" # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板
draft: false # 是否隐藏
hidden: true # 是否隐藏（打包）

description: "图库" # 页面描述、面向搜索引擎用户
summary: "图库" # 页面描述、面向社交媒体用户
Keywords: "图片,摄影,分享" # 网站关键词（SEO）

cover:
    image: "https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" # 图片链接
    hidden: false # 是否隐藏
    # alt: "头图" # 替代文本
    # caption: "LOGO" # 介绍文本
    # relative: false # 是否是相对路径
---
lightgallerys 性能相对更高，但是与 pjax 一起使用时存在各种冲突，改了 A 问题就出现 B 问题简直奔溃，而且并非免费商用
{{< lightgallerys >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/9TrcLGFPAXltNk8.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/gFhu8jYR6ZPtxWi.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/R1e4aFoj8r5VdOX.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/t4QF6rnOvseIGUc.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/CcFDqyOZbdwJlts.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/6TygFMJ5kNiuprW.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/Dfwn1yrBTGkacF2.jpg" >}}
{{< lightgallery src="https://s2.loli.net/2024/04/28/ZOXs8kRGnfagAj5.jpg" >}}
{{< /lightgallerys >}}