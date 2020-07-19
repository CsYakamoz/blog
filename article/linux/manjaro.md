# [Manjaro](https://manjaro.org/)

## 初始化配置

1. update package

   1. enable AUR support
   2. change mirror to your region, then refresh mirrors list
   3. refresh database
   4. reboot

2. dotfile

   1. install tmux and create `~/.tmux.conf`
   2. create `~/.Xmodmap`
   3. install [oh-my-zsh](https://ohmyz.sh/) and update `~/.zshrc`

   reference: [.tmux.conf](../tmux/tmux.conf), [.Xmodmap](../dotfile/README.md), [.zshrc](../dotfile/README.md)

3. install software

   1. nodejs
   2. npm
   3. yarn

4. vim

   1. download neovim with xclip, python-pynvim
   2. install [vim-plug](https://github.com/junegunn/vim-plug)
   3. clone vimrc, then install plugin
   4. install ripgrep, fzf,, bat, nerd-fonts

5. firefox

   1. install Vimium-FF, Stylus

6. fcitx

   1. install fcitx, fcitx-configuration, fcitx-rime
   2. install fcitx-configtool with qt5
   3. for KDE, create ~/.pam_environment, it's content is
      ```
        GTK_IM_MODULE=fcitx
        QT_IM_MODULE=fcitx
        XMODIFIERS=@im=fcitx
      ```

7. install command-line tool from [this](../command-line-tool)

## KDE 美化

TODO
