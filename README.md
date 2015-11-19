# tingle-tip [![npm version](https://badge.fury.io/js/tingle-tip.svg)](http://badge.fury.io/js/tingle-tip)

Tip提示

<img src="https://img.alicdn.com/tps/TB1JxrZJpXXXXciXFXXXXXXXXXX-750-1254.png" width="375"/>

## Simple Usage

```javascript
Tip.show({
    icon: 'success', // 'error', 'fail'
    text: '提交成功',
    onHide() {
        console.log('success tip is hidden');
    }
});

Tip.show({
    text: '文字提醒文字提醒文字提醒',
    onHide() {
        console.log('text tip is hidden');
    }
});
```

## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|text|required|-|提示文本(文本应尽量简短)|
|icon| optional |-|tip显示的icon，可选值为：success、error、fail合和loading|
|duration| optional |1500|tip显示的时间(单位是毫秒)|
|autoHide|optional|true|在duration毫秒后会自动关闭提示|
|closeable|optional|false|点击页面关闭浮层|
|onHide|optional|-|tip隐藏时的回调|

## API接口

### Tip.show(options)

静态方法，显示全局的 Tip，并附带所有传入参数，可用参数请参考可用配置。

### Tip.hide()

静态方法，隐藏全局的 Tip。

## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-tip/issues)