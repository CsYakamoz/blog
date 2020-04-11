# Tmux

## Tmux with iTerm2

> iTerm2 is integrated with tmux, allowing you to enjoy a native user interface with all the benefits of tmux's persistence.

MacOS 用户可使用 iTerm2 整合的 Tmux

使用方法, 请看文档: https://www.iterm2.com/documentation-tmux-integration.html

## 配置

有时候需要使用原生 tmux, 此时个人配置如下

```sh
# 基本配置 start
    # 个人习惯的前缀键
    unbind C-b
    set-option -g prefix `
    bind ` send-prefix

    # prefix-[ 进入复制模式，复制模式下使用 vi 模式
    setw -g mode-keys vi

    # 支持 256color
    set -g default-terminal "screen-256color"

    # 限制缓存大小
    set-option -g history-limit 1024

    # 开启鼠标
    set -g mouse on

    # 刷新状态栏的间隔时间(单位：秒，默认15)
    set -g status-interval 60

    # 不允许自动重命名当前窗口
    setw -g allow-rename off
    setw -g automatic-rename off

    # 当删除一个窗口时，自动重新排序窗口序号
    set-option -g renumber-windows on

    # 设置起始下标为1
    set -g base-index 1 # 窗口 - windows
    set -g pane-base-index 1 # 面板 - pane
# 基本配置 end

# 外观配置 start
    # 状态栏前景背景色
    set -g status-style "bg=black, fg=yellow"

    # 状态栏对齐方式
    set-option -g status-justify centre

    # 状态栏左侧
    set -g status-left "#[bg=#FF661D] ❐ #S " # 状态栏左侧内容

    # 状态栏右侧
    set -g status-right '#(date +%Y/%m/%d-%H:%M-%A)' # 状态栏右侧内容

    # 指定消息通知的前景、后景色
    set -g message-style "bg=#202529, fg=#91A8BA"
# 外观配置 end

# 快捷键配置 start
    # 垂直方向新增面板，默认进入当前目录
    unbind '"'
    bind - splitw -v -c '#{pane_current_path}'
    # 水平方向新增面板，默认进入当前目录
    unbind %
    bind | splitw -h -c '#{pane_current_path}'

    # 重新加载配置文件
    bind r source-file ~/.tmux.conf \; display-message "Config reloaded.."

    # 绑定hjkl键为面板切换的上下左右键
    bind k select-pane -U # 绑定k为↑
    bind j select-pane -D # 绑定j为↓
    bind h select-pane -L # 绑定h为←
    bind l select-pane -R # 绑定l为→

    # 绑定Ctrl+hjkl键为面板上下左右调整边缘的快捷指令
    bind -r ^k resizep -U 5 # 绑定Ctrl+k为往↑调整面板边缘5个单元格
    bind -r ^j resizep -D 5 # 绑定Ctrl+j为往↓调整面板边缘5个单元格
    bind -r ^h resizep -L 5 # 绑定Ctrl+h为往←调整面板边缘5个单元格
    bind -r ^l resizep -R 5 # 绑定Ctrl+l为往→调整面板边缘5个单元格
# 快捷键配置 end
```

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

