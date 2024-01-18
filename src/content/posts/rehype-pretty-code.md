---
title: Rehype Pretty Code
description: Advanced syntax highlighter for Astro
publishDate: 2024-01-18
tags: [rehype, shikiji, highlighter]
---

## Line Numbers and Line Highlighting

```js showLineNumbers {4} title="app/components/my-component.js"
import { useFloating } from "@floating-ui/react";

function MyComponent() {
  const { refs, floatingStyles } = useFloating();

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  );
}
```

## Word Highlighting

```js /floatingStyles/
import { useFloating } from "@floating-ui/react";

function MyComponent() {
  const { refs, floatingStyles } = useFloating();

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  );
}
```

## Inline Code Highlighting

The result of `[1, 2, 3].join('-'){:js}` is `'1-2-3'{:js}`.

## ANSI Highlighting

```ansi
[0;36m  vite v5.0.0[0;32m dev server running at:[0m

  > Local: [0;36mhttp://localhost:[0;36;1m3000[0;36m/[0m
  > Network: [0;2muse `--host` to expose[0m

  [0;36mready in 125ms.[0m

[0;2m8:38:02 PM[0m [0;36;1m[vite][0m [0;32mhmr update [0;2m/src/App.jsx
```

More at https://rehype-pretty-code.netlify.app/
