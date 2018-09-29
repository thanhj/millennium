# Html Snapshot Service
> [Puppeteer](https://github.com/GoogleChrome/puppeteer) (Headless Chrome Node API)-based rendering solution.
- Base on: https://github.com/cheeaun/puppetron

Usage
---

### Screenshot (Not available)

### Render HTML

```
/render/{URL}
```

Notes:

- `script` tags except `JSON-LD` will be removed
- `link[rel=import]` tags will be removed
- HTML comments will be removed
- `base` tag will be added for loading relative resources
- Elements with absolute paths like `src="/xxx"` or `href="/xxx"` will be prepended with the origin URL.

Parameters: *None*

### PDF (not available)


Development
---

For local Chromium install:

1. `npm install`
2. `npm start`
3. Load `localhost:3000`
