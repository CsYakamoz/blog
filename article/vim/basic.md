[TOC]

# Basic

## 滚屏

`<C-u>` 向上滚动半屏幕

`<C-d>` 向下滚动半屏幕

`<C-y>` 向上滚动一行

`<C-e>` 向下滚动一行

## 根据光标移动

`zz` 把光标所在行移动到屏幕中间

`zt` (top)把光标所在行移动到屏幕顶部

`zb` (bottom)把光标所在行移动到屏幕底部

`z[count]l` 视窗向右移动 count 个字符

`z[count]h` 视窗向左移动 count 个字符

`zL` 视窗向右移动半个屏幕

`zH` 视窗向左移动半个屏幕

## 标签页

```
:tabn[ext]          go to next tab
:tabp[revious]      go to previous tab
:tabfir[st]         go to first tab
:tabl[ast]          go to last tab
:tabo[nly]          close all other tab pages

gt, <C-PageDown>    go to next tab
gT, <C-PageUp>      go to previous tab
{i}gt               go to tab in position i
```

## 可视模式

`v` 普通的可视模式

`V` 按行选择的可视模式

`<C-v>` 按列选择的可视模式

如果你在可视模式下选中了一些文字, 然后你又发现你需要改变被选择的文字的另一端, 用 "o" 命令即可

(提示: "o" 表示 other end), 光标会移动到被选中文字的另一端, 现在你可以移动光标去改变选中文字的开始点了

再按 "o" 光标还会回到另一端

当使用列块可视模式的时候, 你会有四个角, "o" 只是把你移到对角上

而用 "O" 则能移到同一行的另一个角上

## 分割窗口

`:sp[lit]` 水平分割

`:vs[plit]` 垂直分割

## 改变大小写

先用可视模式选择对应的范围, 接着按以下键改变大小写:

- u: 全部变为小写
- U: 全部变为大写
- ~: 反转, 小写变大写, 大写变小写

## 宏

"." 命令重复前一个修改操作,但如果你需要作一些更复杂的操作它就不行了

这时, 记录命令就变得很有效! 这需要三个步骤:

1. "q{register}" 命令启动一次击键记录, 结果保存到 {register} 指定的寄存器中. 寄存器名可以用 a 到 z 中任一个字母表示
2. 输入你的命令
3. 回到 normal 模式, 键入 q (后面不用跟任何字符) 命令结束记录

然后可以通过 "q{register}"启用对应的记录

## 补全

内容来源: https://github.com/wsdjeg/vim-galore-zh_cn#%E8%A1%A5%E5%85%A8

|    映射    |               类型               |
| :--------: | :------------------------------: |
| <c-x><c-l> |               整行               |
| <c-x><c-n> |       当前缓冲区中的关键字       |
| <c-x><c-i> | 当前文件以及包含的文件中的关键字 |
| <c-x><c-f> |              文件名              |
| <c-x><c-v> |             Vim 命令             |

## gv

Start Visual mode with the same area as the previous area and the same mode.

In Visual mode the current and the previous Visual area are exchanged.

After using "p" or "P" in Visual mode the text that was put will be selected.

## gn

Search forward for the last used search pattern, like with `n`, and start Visual mode to select the match.

If the cursor is on the match, visually selects it.

If an operator is pending, operates on the match.

E.g., "dgn" deletes the text of the next match.

If Visual mode is active, extends the selection until the end of the next match.

Note: Unlike `n` the search direction does not depend on the previous search command.
