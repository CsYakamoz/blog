# Tmux

## Tmux with iTerm2

> iTerm2 is integrated with tmux, allowing you to enjoy a native user interface with all the benefits of tmux's persistence.

MacOS 用户可使用 iTerm2 整合的 Tmux

使用方法, 请看文档: https://www.iterm2.com/documentation-tmux-integration.html

## 配置

有时候需要使用原生 tmux, 此时使用该[配置](tmux.conf)

## 常用快捷键

`prefix-` 则意味着需要先按 `prefix` 键

### Session

```sh
# 创建新 session
tmux [new -s session-name]

# 恢复 session
tmux a [-t session-name]

# 列出所有 session
tmux ls
```

```sh
# 创建新 session
prefix-:new [-s session-name]

# 列出所有 session
prefix-s

# 重命名当前 session
prefix-$

# 退出当前 session
prefix-d
```

### Window

```sh
# 创建新 window
prefix-c

# 列出所有 window
prefix-w

# 前一个 window
prefix-p

# 后一个 window
prefix-n

# 重命名当前 window
prefix-,

# 调整 window 排序 source 默认是当前窗口序号, target 是目标窗口序号
prefix-:swap-window [-s source] -t target

# 跳转到第 n 个 window
prefix-n(数字)
```

### Pane

```sh
# 垂直分割
prefix-|

# 水平分割
prefix--

# 显示 pane 编号，在编号消失前输入对应的数字可切换到相应的 pane
prefix-q

# 切换 pane 布局
prefix-<space>

# 光标移动到左, 下, 上, 右方的 pane
prefix-h, j, k, l

# 当前窗格往左, 下, 上, 右方扩大 5 格, ^ 为 Ctrl
prefix-^h, ^j, ^k, ^l

# 临时最大化当前 pane, 再次使用则恢复
prefix-z

# 当前 pane 与上一个 pane 交换位置
prefix-{

# 当前 pane 与下一个 pane 交换位置
prefix-}

# 当前 pane 移到新的 window 中
prefix-!
```

### 杂七杂八

`prefix-t` 在当前窗格显示数字时钟

`prefix-?` 显示快捷键帮助文档

## 参考

[Tmux 使用手册](http://louiszhai.github.io/2017/09/30/tmux/)

[Tmux 快捷键 & 速查表 & 简明教程](https://gist.github.com/ryerh/14b7c24dfd623ef8edc7)

