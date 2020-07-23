# [Rime](https://rime.im/)

> 记录 rime 的配置

官方帮助文档: https://rime.im/docs/

## 用户配置文件目录

Mac: `~/Library/Rime`

Linux: `~/.config/ibus/rime` or `~/.config/fcitx/rime`

Windows: `%APPDATA%\Rime`

## default.custom.yaml

```yaml
patch:
  menu/page_size: 7

  schema_list:
    - schema: luna_pinyin
    - schema: luna_pinyin_simp
    - schema: luna_pinyin_fluency

  ascii_composer:
    switch_key:
      Shift_L: commit_code
```

## squirrel.custom.yaml

```yaml
patch:
  style/horizontal: true
  style/font_point: 16
  us_keyboard_layout: true
  # style/color_scheme: ink
  # style/color_scheme: psionics
  # style/color_scheme: luna
  style/color_scheme: purity_of_essence
```

内置皮肤看此处: https://github.com/rime/squirrel/blob/master/data/squirrel.yaml

## luna_pinyin_simp.custom.yaml

```yaml
patch:
  "switches/@0/reset": 1

  "speller/algebra":
    - erase/^xx$/ # 第一行保留

    # 模糊音定義
    # 需要哪組就刪去行首的 # 號，單雙向任選
    #- derive/^([zcs])h/$1/             # zh, ch, sh => z, c, s
    #- derive/^([zcs])([^h])/$1h$2/     # z, c, s => zh, ch, sh

    #- derive/^n/l/                     # n => l
    #- derive/^l/n/                     # l => n

    # 這兩組一般是單向的
    #- derive/^r/l/                     # r => l

    #- derive/^ren/yin/                 # ren => yin, reng => ying
    #- derive/^r/y/                     # r => y

    # 下面 hu <=> f 這組寫法複雜一些，分情況討論
    #- derive/^hu$/fu/                  # hu => fu
    #- derive/^hong$/feng/              # hong => feng
    #- derive/^hu([in])$/fe$1/          # hui => fei, hun => fen
    #- derive/^hu([ao])/f$1/            # hua => fa, ...

    #- derive/^fu$/hu/                  # fu => hu
    #- derive/^feng$/hong/              # feng => hong
    #- derive/^fe([in])$/hu$1/          # fei => hui, fen => hun
    #- derive/^f([ao])/hu$1/            # fa => hua, ...

    # 韻母部份
    #- derive/^([bpmf])eng$/$1ong/      # meng = mong, ...
    #- derive/([ei])n$/$1ng/            # en => eng, in => ing
    #- derive/([ei])ng$/$1n/            # eng => en, ing => in

    # 樣例足夠了，其他請自己總結……

    # 反模糊音？
    # 誰說方言沒有普通話精確、有模糊音，就能有反模糊音。
    # 示例爲分尖團的中原官話：
    #- derive/^ji$/zii/   # 在設計者安排下鳩佔鵲巢，尖音i只好雙寫了
    #- derive/^qi$/cii/
    #- derive/^xi$/sii/
    #- derive/^ji/zi/
    #- derive/^qi/ci/
    #- derive/^xi/si/
    #- derive/^ju/zv/
    #- derive/^qu/cv/
    #- derive/^xu/sv/
    # 韻母部份，只能從大面上覆蓋
    #- derive/^([bpm])o$/$1eh/          # bo => beh, ...
    #- derive/(^|[dtnlgkhzcs]h?)e$/$1eh/  # ge => geh, se => sheh, ...
    #- derive/^([gkh])uo$/$1ue/         # guo => gue, ...
    #- derive/^([gkh])e$/$1uo/          # he => huo, ...
    #- derive/([uv])e$/$1o/             # jue => juo, lve => lvo, ...
    #- derive/^fei$/fi/                 # fei => fi
    #- derive/^wei$/vi/                 # wei => vi
    #- derive/^([nl])ei$/$1ui/          # nei => nui, lei => lui
    #- derive/^([nlzcs])un$/$1vn/       # lun => lvn, zun => zvn, ...
    #- derive/^([nlzcs])ong$/$1iong/    # long => liong, song => siong, ...
    # 這個辦法雖從拼寫上做出了區分，然而受詞典制約，候選字仍是混的。
    # 只有真正的方音輸入方案纔能做到！但「反模糊音」這個玩法快速而有效！

    # 模糊音定義先於簡拼定義，方可令簡拼支持以上模糊音
    - abbrev/^([a-z]).+$/$1/ # 簡拼（首字母）
    - abbrev/^([zcs]h).+$/$1/ # 簡拼（zh, ch, sh）

    # 以下是一組容錯拼寫，《漢語拼音》方案以前者爲正
    - derive/^([nl])ve$/$1ue/ # nve = nue, lve = lue
    - derive/^([jqxy])u/$1v/ # ju = jv,
    - derive/un$/uen/ # gun = guen,
    - derive/ui$/uei/ # gui = guei,
    - derive/iu$/iou/ # jiu = jiou,

    # 自動糾正一些常見的按鍵錯誤
    - derive/([aeiou])ng$/$1gn/ # dagn => dang
    - derive/([dtngkhrzcs])o(u|ng)$/$1o/ # zho => zhong|zhou
    - derive/ong$/on/ # zhonguo => zhong guo
    - derive/ao$/oa/ # hoa => hao
    - derive/([iu])a(o|ng?)$/a$1$2/ # tain => tian

  # 分尖團後 v => ü 的改寫條件也要相應地擴充：
  #'translator/preedit_format':
  #  - "xform/([nljqxyzcs])v/$1ü/"
```
