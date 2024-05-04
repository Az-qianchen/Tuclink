---
tags: ["Hugo"] # 标签
author: "仟尘" # 作者
title: "Hugo 图库 photo swipe 方案" # 标题
date: "2024-04-28" # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板
draft: false # 是否隐藏

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
photo swipe 是目前最理想的一种图库解决方案，MIT 协议，且性能也足够好，使用和兼容问题也没遇到那么多,但目前还有一个问题就是第一次点击时会触发图片原始链接，而不是打开灯箱
{{< PhotoSwipes >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/R1e4aFoj8r5VdOX.jpg" width="3734" height="2801" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/CcFDqyOZbdwJlts.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/9TrcLGFPAXltNk8.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/t4QF6rnOvseIGUc.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/gFhu8jYR6ZPtxWi.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/Dfwn1yrBTGkacF2.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/ZOXs8kRGnfagAj5.jpg" width="3000" height="4000" >}}
{{< PhotoSwipe src="https://s2.loli.net/2024/04/28/6TygFMJ5kNiuprW.jpg" width="4096" height="3072" >}}
{{< /PhotoSwipes >}}