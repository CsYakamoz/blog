# Dot File

## oh-my-zsh

```sh
# built-in theme
ZSH_THEME="ys"
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
alias vi='nvim -u ~/.config/nvim/minimal.vim'
alias vim='nvim'
alias cp="cp -i"

export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8

# easily switch git worktree, required fzf
esgwt() {
  if [[ ! -e .git ]]; then
    echo 'no a git repository'
    return
  fi

  local dir=$(git worktree list | awk '{print $1}' | fzf -1)

  if [[ -n $dir ]]; then
    cd "${dir}" || return
  fi
}

# vscode need it when using manjaro operating system
# export ELECTRON_TRASH=gio
```

## vim

link: [vimrc](https://github.com/CsYakamoz/vimrc)

## tmux

link: [tmux](../tmux/README.md)
