# 文本对象(Text Object)

这是一系列只能在可视模式(Visual mode)下或在操作符(operator)后使用的命令.

这些命令或以 "a" 开头, 代表选择包含空白的 ("a"n) 对象; 或以 "i" 开头, 代表选择不包含空白 ("i"nner) 的对象.

另外, 空白本身也是内含对象. 这样, "inner" 对象总比 "a" 对象选择较少的文本.

**Note**: 以下的命令前面可带有 count, 只是默认为 1

## aw

"a word", 选择 [count] 个 word. 包括开头或结尾的空白, 但不单独计算.

## iw

"inner word", 选择 [count] 个 word. word 之间的空白也被算为一个 word.

## aW

"a WORD", 选择 [count] 个 WORD. 包括开头或结尾的空白, 但不单独计算.

## iW

"inner WORD", 选择 [count] 个 WORD. WORD 之间的空白也被算为一个 WORD.

> **word**: a word consists of a sequence of letters, digits and underscores, or a sequence of other non-blank characters, separated with white space(space, tabs, \<EOL\>). An empty line is also considered to be a word.
>
> word 或由字母, 数字, 下划线组成的序列组成, 或由其它非空字符组成的序列组成, 其分割符为空白符(包含空格, 制表符, 换行符); 空行也被当作 word

> **WORD**: a WORD consists of a sequence of non-blank characters, separated with white space. An empty line is also considered to be a WORD
>
> WORD 由非空字符组成的序列组成, 其分割符为空字符; 空行也被当作 WORD

## as

"a sentence", 选择 [count] 个 sentences.

## is

"inner sentence", 选择 [count] 个 sentences.

## ap

"a paragraph", 选择 [count] 个 paragraphs.

ip

"inner paragraph", 选择 [count] 个 paragraphs.

## a] or a[

"a [] block", 选择 [count] 层 '[' ']' 块. 先往后查找第 [count] 个未匹配的 '[', 然后往前查找其匹配的 ']'. 两者之间的文本, **包括** '[' 和 ']', 被选择.

## i] or i[

"inner [] block", 选择 [count] 层 '[' ']' 块. 先往后查找第 [count] 个未匹配的 '[', 然后往前查找其匹配的 ']'. 两者之间的文本, **不包括** '[' 和 ']', 被选择.

## a) or a( or ab

"a block", 选择 [count] 层块. 先往后查找第 [count] 个未匹配的 '(', 然后往前查找其匹配的 ')', 包括 '(' 和 ')'.

## i) or i( or ib

"inner block", 选择 [count] 层块. 先往后查找从第 [count] 个未匹配的 '(', 然后往前查找其匹配的 ')', 不包括 '(' 和 ')'.

## a\< or a\>

"a <> block", 选择 [count] 层 <> 块, 先往后查找第 [count] 个未匹配的 '<', 然后往前查找其匹配的 '>', 包括 '<' 和 '>'.

## i\< or i\>

"inner <> block", 选择 [count] 层 <> 块, 先往后查找第 [count] 个未匹配的 '<', 然后往前查找其匹配的 '>', 不包括 '<' 和 '>'.

## at

"a tag block", 选择 [count] 层标签块. 先往后查找第 [count] 个未匹配的 "<aaa>", 然后往前查找其匹配的 "</aaa>", 包括 "<aaa>" 和 "</aaa>".

## it

"inner tag block", 选择 [count] 层标签块. 先往后查找第 [count] 个未匹配的 "<aaa>", 然后往前查找其匹配的 "</aaa>", 不包括 "<aaa>" 和 "</aaa>".

## a{ or a} or aB

"a Block", 选择 [count] 层大块. 先往后查找第 [count] "{", 然后往前查找其匹配的 '}', 包括 '{' 和 '}'.

## i{ or i} or iB

"inner Block", 选择 [count] 层大块. 先往后查找第 [count] "{", 然后往前查找其匹配的 '}', 不包括 '{' 和 '}'.

## a" a' a\`

"a quoted string". Selects the text from the previous quote until the next quote. Only works within one line.

## i" i' i\`

Like a", a' and a\`, but exclude the quotes

## Example

"dl" delete character (alias: "x")

"diw" delete inner word

"daw" delete a word

"diW" delete inner WORD

"daW" delete a WORD

"dgn" delete the next search pattern match

"dd" delete one line

"dis" delete inner sentence

"das" delete a sentence

"dib" delete inner '(' ')' block

"dab" delete a '(' ')' block

"dip" delete inner paragraph

"dap" delete a paragraph

"diB" delete inner '{' '}' block

"daB" delete a '{' '}' block
