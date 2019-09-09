# 使用webpack 封装了一个原生js 弹窗组件

## 编译
```
npm run build
```

### 编译后的js  位于dist/index.bundle.js

### demo: dist/inde.html

### 在线demo :  [http://demo.crazyming.cn?link=popup](http://demo.crazyming.cn?link=popup)
### blog介绍 : [https://www.crazyming.cn/note/996/](https://www.crazyming.cn/note/996/)


### 使用方式：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Title</title>
    <script src="index.bundle.js"></script>
</head>
<body>

<button class="test">测试弹窗</button>
<script>

    var button = document.getElementsByClassName('test')[0];
    button.addEventListener('click', function () {
        popup.show({
            title: "提示",
            content: "谷歌是一家位于美国的跨国科技企业，业务包括互联网搜索、云计算、广告技术等，同时开发并提供大量基于互联网的产品与服务，其主要利润来自于AdWords等广告服务。你确定吗?",
            confirm: function () {
                // alert('你点击了确定')
            },
            cancel: function () {
                // alert("你点击了取消")
            }
        })

    })

</script>
</body>
</html>
```

