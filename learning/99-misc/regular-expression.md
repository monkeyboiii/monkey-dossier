---
slug: regular-expression
title: Regular Expression
---

:::tip
Source of truth by [testing](https://www.regex101.com).
:::

## Word Boundary Marker

`\b` is used to mark the boundary of a word. But when put besides a non-word, it matches if it's at boundary with a word. It's definition is given as

```python
(^\w|\w$|\W\w|\w\W)
```

So for example, `"a#\b"` matches `"a#a"` but not `"a# "`.

And `\w` is `[a-zA-Z0-9_]`.
