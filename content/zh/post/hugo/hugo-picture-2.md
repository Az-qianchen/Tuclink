---
tags: ["Hugo"] # 标签
author: "仟尘" # 作者
title: "Hugo 图库 nanogallery 方案" # 标题
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
nanogallery 画廊的效果动画最完美，但是相对性能较低，且灯箱效果在移动端极为难用
{{< galleries >}}
{{< gallery src="https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/R1e4aFoj8r5VdOX.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/CcFDqyOZbdwJlts.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/9TrcLGFPAXltNk8.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/t4QF6rnOvseIGUc.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/gFhu8jYR6ZPtxWi.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/Dfwn1yrBTGkacF2.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/ZOXs8kRGnfagAj5.jpg" >}}
{{< gallery src="https://s2.loli.net/2024/04/28/6TygFMJ5kNiuprW.jpg" >}}
{{< /galleries >}}

主要就是两个 shortcodes 文件

gallery.html
```html
<a href="{{ .Get "src" }}" data-ngThumb="{{ .Get "src" }}">{{ .Get "title" }}</a>
```

galleries.html
```html
<!-- 画廊 -->
<!-- https://nanogallery2.nanostudio.org/documentation.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nanogallery2@3.0.5/dist/css/nanogallery2.min.css">
    <script src="https://cdn.jsdelivr.net/npm/nanogallery2@3.0.5/dist/jquery.nanogallery2.min.js"></script>
</head>
<body>

    <div id="myNanoGallery" data-nanogallery2='{ 
    "thumbnailOpenInLightox": true,

    "galleryTheme": {
        "thumbnail": {
            "borderRadius": "8px"
        }
    },

    "viewerTools": {
        "topLeft": "pageCounter, playPauseButton",
        "topRight": "downloadButton, rotateLeft, rotateRight, , closeButton"
    },
    "thumbnailLabel": {
        "display": "false",
        "position": "overImage",
        "titleFontSize": "0.8em"
    },
    
    "thumbnailHoverEffect2": "image_scale_1.00_1.20|label_backgroundColor_rgba(0,0,0,0.4)_rgba(0,0,0,0)",
    
    "eventsDebounceDelay": 10,
    "thumbnailDisplayOutsideScreen": true,

    "thumbnailL1BorderHorizontal": 0,
    "thumbnailL1BorderVertical": 0,

    "thumbnailDisplayTransition":          "scaleUp",
    "thumbnailDisplayTransitionDuration":  500,  
    "thumbnailDisplayInterval":            30,
    
    "galleryDisplayTransition":            "none",
    "galleryDisplayTransitionDuration":    500,

    "thumbnailWidth": 200,
    "thumbnailHeight": "auto",
    "thumbnailGutterHeight": 4,
    "thumbnailGutterWidth": 4

}'>
    {{ .Inner }}
</div>
</body>
</html>

<!--
# 主题
"thumbnailOpenInLightox": true, # 是否使用灯箱

"galleryTheme": {
    "thumbnail": {
        "borderRadius": "10px" # 圆角
    }
},
# 工具栏
"viewerTools": {
    "topLeft": "pageCounter, playPauseButton",
    "topRight": "downloadButton, rotateLeft, rotateRight, , closeButton"
},

# 描述
"thumbnailLabel": {
    "position": "overImage", # 标签位置
    "titleFontSize": "0.8em" # 标签字体大小
},

"thumbnailHoverEffect2": "image_scale_1.00_1.20|label_backgroundColor_rgba(0,0,0,0.4)_rgba(0,0,0,0)",  缩略图鼠标悬停效果缩放/透明度

"eventsDebounceDelay": 10,  显示延迟
"thumbnailDisplayOutsideScreen": "false",  缩略图是否超出屏幕时隐藏

# 缩略图边框
"thumbnailL1BorderHorizontal": 0,
"thumbnailL1BorderVertical": 0,

# 缩略图显示动画
"thumbnailDisplayTransition":          "scaleUp",
"thumbnailDisplayTransitionDuration":  500,  
"thumbnailDisplayInterval":            30   

# 图库显示动画
"galleryDisplayTransition":         "none",  切换效果
"galleryDisplayTransitionDuration":  500   切换效果持续时间

# 布局
"thumbnailWidth":   200,宽度
"thumbnailHeight":  "auto" 高度
"thumbnailL1GutterWidth": 10,  左右边距
"thumbnailL1GutterHeight": 10,  上下边距

"viewerGalleryTWidth": 10,  图片库宽度
"viewerGalleryTHeight": 10， 图片库高度 -->
```
参数我都进行了注释可以进行自行调整

使用方法：(实际使用时去除\\)
```
{{\< galleries >}}
{{\< gallery src="https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" >}}
{{\< /galleries >}}
```