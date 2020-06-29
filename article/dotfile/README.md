# Dot File

## .zshrc(oh-my-zsh)

Non-built-in plugins:

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [fast-syntax-highlighting](https://github.com/zdharma/fast-syntax-highlighting)

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
  if ! git worktree list > /dev/null 2>&1; then
    echo 'no a git repository'
    return
  fi

  local count=""
  count=$(git worktree list | awk '{print $1}' | wc -l)
  if [[ "${count}" == *1 ]]; then
    return
  fi

  # lcp => longest common parent (dir)
  local lcp=""
  local worktreePath=""

  for worktreePath in $(git worktree list | awk '{print $1}'); do
    if [[ -z "${lcp}" ]]; then
      lcp="${worktreePath}"
    else
      while [[ ! "${worktreePath}" =~ ^${lcp} ]]; do
        lcp=$(dirname "${lcp}")
      done
    fi
  done

  if [[ "${lcp}" != "/" ]]; then
    lcp+="/"
  fi

  local target=""
  target=$(git worktree list | awk '{print $1, $3}' | while read -r worktreePath; do echo "${worktreePath#${lcp}}"; done | fzf -1)
  if [[ -z "${target}" ]]; then
    return
  fi

  local dir="${lcp}/${target% *}"
  if [[ -n "${dir}" ]]; then
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

## .Xmodmap

CapsLock 映射成 ControlL

Shift + CapsLock 映射成 CapsLock

```xmodmap
clear lock
clear control
add control = Caps_Lock Control_L Control_R
keycode 66 = Control_L Caps_Lock NoSymbol NoSymbol
```

reference: [ArchWiki Xmodmap](<https://wiki.archlinux.org/index.php/Xmodmap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)
