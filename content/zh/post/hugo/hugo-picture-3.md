---
tags: ["Hugo"] # 标签
author: "仟尘" # 作者
title: "Hugo 图库 photo swipe 方案" # 标题
date: "2024-04-28" # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板W
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

主要就是两个 shortcodes 文件
```html
<a href="{{ .Get "src" }}" data-pswp-width="{{ .Get "width" | default 150 }}" data-pswp-height="{{ .Get "height" | default 150 }}" class="gallery-item" >
    <img src="{{ .Get "src" }}" alt="Beautiful Landscape" style="width: 100%; height: auto;" class="gallery-item">
</a>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe/dist/photoswipe.css">
    <style>
        .post-content a {
            box-shadow: none;
        }
        #my-gallery {
            column-count: 2;
            column-gap: 0px;
        }
        #my-gallery a {
            display: block;
            overflow: hidden; /* 防止内容溢出 */
            border-radius: 10px;  /* 圆角 */
            margin:  0 2px 4px 2px; /* 边距 */
        }
        #my-gallery img {
            width: 100%;
            transition: transform 0.4s ease; /* 平滑变换效果 */
            margin: 0;
        }
        #my-gallery a, #my-gallery img {
            padding: 0;
            border: none;
        }
        #my-gallery a:hover img {
            transform: scale(1.1); /* 鼠标悬停时放大图片 */
        }
    </style>
</head>
<body>
    <div id="my-gallery">
        {{ .Inner }}
    </div>

    <script type="module">
        import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe/dist/photoswipe-lightbox.esm.min.js';
        import PhotoSwipe from 'https://cdn.jsdelivr.net/npm/photoswipe/dist/photoswipe.esm.min.js';

        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => Promise.resolve(PhotoSwipe)
        });
        lightbox.init();
    </script>

</body>
</html>
```

### 使用方法
```
{{</* PhotoSwipes */>}}
{{</* PhotoSwipe src="https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" width="3000" height="4000" */>}}
{{</* /PhotoSwipes */>}}
```