![image](https://user-images.githubusercontent.com/5889006/190859441-141b5f81-8483-40d2-bd96-ebf85616a46d.png)

# Hugo Theme Stack

<img align="right" width="150" alt="logo" src="https://user-images.githubusercontent.com/5889006/190859553-5b229b4f-c476-4cbd-928f-890f5265ca4c.png">

Card-style Hugo theme designed for bloggers.

## Quickstart

Use this template: [CaiJimmy/hugo-theme-stack-starter](https://github.com/CaiJimmy/hugo-theme-stack-starter)

## Demo

* Starter template demo: [demo.stack.jimmycai.com](https://demo.stack.jimmycai.com)
* Dev build: [dev.stack.jimmycai.com](https://dev.stack.jimmycai.com)

## Documentation

Visit [stack.jimmycai.com](https://stack.jimmycai.com)

## Copyright

**Licensed under the GNU General Public License v3.0**

Please do not remove the "*Theme Stack designed by Jimmy*" text and link.

If you want to port this theme to another blogging platform, please let me know🙏.


### Blue glass material (this fork)

Keep Stack's layout and enable the blue-white glass material in the site configuration:

```yaml
params:
  texture: glass # glass, paper, or original (default)
```

If the site overrides `layouts/partials/head/custom.html`, include
`{{ partial "head/texture.html" . }}` there. The theme uses fingerprinted CSS and
JavaScript assets. Normal visits have no demo toolbar; add `?texture-demo=glass`,
`paper`, or `original` to compare materials. Light and dark schemes are supported.

The giscus provider includes blue glass comment styles. It sends the CSS as a data
stylesheet through giscus's theme API, avoiding cross-origin requests for local
CSS. Text remains readable in dark mode and the iframe canvas is transparent.
