# Dot File

## .zshrc

```sh
# built-in theme
ZSH_THEME="ys"
# or
ZSH_THEME="agnoster"
# or pure, link: https://github.com/sindresorhus/pure
ZSH_THEME=""
autoload -U promptinit; promptinit
prompt pure

plugins=(
  git
  sudo
  jump
  zsh-autosuggestions
  fast-syntax-highlighting
)

alias j="jump"
alias rt="trash-put"
alias vi='nvim'
alias vim='nvim --cmd "let g:plugin_level=1"'
alias cp="cp -i"

export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8

# vscode need it when using manjaro operating system
# export ELECTRON_TRASH=gio
```

## vim

link: [vimrc](https://github.com/CsYakamoz/vimrc)

## tmux

link: [tmux](../tmux/README.md)
