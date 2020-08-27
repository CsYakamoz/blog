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

alias proxy_on="export http_proxy=http://127.0.0.1:8001;export https_proxy=http://127.0.0.1:8001;export HTTP_PROXY=http://127.0.0.1:8001;export HTTPS_PROXY=http://127.0.0.1:8001;"
alias proxy_off="unset http_proxy;unset https_proxy;unset HTTP_PROXY;unset HTTPS_PROXY;"

export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8

# easily switch git worktree, required fzf
esgwt() {
  if ! git worktree list > /dev/null 2>&1; then
    echo 'not a git repository, ignore...'
    return
  fi

  local worktree_list=""
  worktree_list=$(git worktree list)

  local count=""
  count=$(echo "${worktree_list}" | wc -l)
  if [[ "${count}" == *1 ]]; then
    echo 'only one worktree, ignore...'
    return
  fi

  local loop_var=""

  # lcp -> longest common parent (dir)
  local lcp=""
  while read -r loop_var; do
    if [[ -z "${lcp}" ]]; then
      lcp="${loop_var}"
    else
      while [[ ! "${loop_var}" =~ ^${lcp} ]]; do
        lcp=$(dirname "${lcp}")
      done
    fi
  done < <(echo "${worktree_list}" | awk '{print $1}')

  if [[ "${lcp}" != "/" ]]; then
    lcp+="/"
  fi

  local current_dir=""
  current_dir=$(pwd)

  local list=""
  local header=""
  while read -r loop_var; do
    local suffix="${loop_var#${lcp}}"
    if [[ "${loop_var}" == "${current_dir}"* ]]; then
      header="${suffix}"
    else
      if [[ -n "${list}" ]]; then
        list+="\n"
      fi
      list+="${suffix}"
    fi
  done < <(echo "${worktree_list}" | awk '{print $1, $3}')
  list="${header}\n$(echo "${list}" | sort)"

  local chosen=""
  chosen=$(echo "${list}" | fzf --header-lines=1 --prompt 'Worktree> ')
  if [[ -z "${chosen}" ]]; then
    return
  fi

  local target="${lcp}/${chosen% *}"
  cd "${target}" || return
}

# require: realpath, neovim-remote, vim-floaterm
vopen() {
  if [ -z "$1" ]; then
    echo "usage: vopen {filename}"
    return
  fi

  if [ -z "$NVIM_LISTEN_ADDRESS" ]; then
    echo "must be called inside neovim"
    return
  fi

  name=$(realpath "${1}")
  if [[ ! -f "${name}" ]]; then
    echo "no such file: ${name}"
    return
  fi

  nvr --servername "${NVIM_LISTEN_ADDRESS}" -l "${name}"
  nvr --servername "${NVIM_LISTEN_ADDRESS}" -l --remote-send "<Esc>:FloatermToggle<CR>"
}


# vscode maybe need it when using manjaro operating system
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
