# fugitive.vim

## 查看当前文件的历史改动

1. `0Glog`, 列出所有历史改动
2. `Gdiff`  查看某提交的具体改动 
   - `Gdiff`, with no arguments: compare with the working copy.
   - `Gdiff HEAD`, compare to the latest revision
   - `Gdiff <rev>`, compare to an arbitrary revision. As usual, it’s enough to provide the first few characters of the SHA-1 hash

reference: [How to compare file revisions with fugitive.vim](https://advancedweb.hu/how-to-compare-file-revisions-with-fugitive-vim/)

