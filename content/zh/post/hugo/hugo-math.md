---
tags: ["Hugo"] # 标签
author: "仟尘" # 作者
title: "Hugo 添加数学公式支持" # 标题
date: "2024-05-12" # 日期
weight: 1 # 权重用于排序
searchHidden: false # 是否不被搜索
layout: "baseof" # 布局模板W
draft: false # 是否隐藏

description: "使用 mathjax 添加 latex 公式支持" # 页面描述、面向搜索引擎用户
summary: "使用 mathjax 添加 latex 公式支持" # 页面描述、面向社交媒体用户
Keywords: "latex,hugo,math,数学" # 网站关键词（SEO）

cover:
    image: "https://s2.loli.net/2024/04/28/AYskmM68Eg4Cy7t.jpg" # 图片链接
    hidden: false # 是否隐藏
    # alt: "头图" # 替代文本
    # caption: "LOGO" # 介绍文本
    # relative: false # 是否是相对路径
---
参考了这篇[文章](https://gohugo.io/content-management/mathematics/#step-1)和这篇[文章](https://www.gohugo.org/doc/tutorials/mathjax/)

hugo 版本要大于 v0.122.0

将以下脚本放在 layouts/partials/ 文件夹中的一个模板中，例如 extend_footer.html
``` js
<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```

在配置文件 config.yaml 中添加以下配置
``` yaml
markup:
  goldmark:
    extensions:
      passthrough:
        delimiters:
          block:
          - - \[
            - \]
          - - $$
            - $$
          inline:
          - - \(
            - \)
          - - $
            - $
        enable: true
```

现在就能成功渲染数学公式了

\begin{aligned}
KL(\hat{y} || y) &= \sum_{c=1}^{M}\hat{y}_c \log{\frac{\hat{y}_c}{y_c}} \\
JS(\hat{y} || y) &= \frac{1}{2}(KL(y||\frac{y+\hat{y}}{2}) + KL(\hat{y}||\frac{y+\hat{y}}{2}))
\end{aligned}

使用时如果需要使用内联方程，即直接将公式嵌入文本如：\\(E=mc^2\\)

不能使用
```
$E=mc^2$
```
需要使用
```
\\(E=mc^2\\)
```