# Junto

A (mostly) feature-less Hugo template focused on practicality.

![Content](/images/screenshot.png)

## Table of Contents

* [Features]()
* [Getting Started](#getting-started)
* [Customizing](#customizing)
* [License](#license)

## Features

The main features of this theme include:

This theme doesn't include:

* Syntax highlighting
* Disqus integration
* Google analytics

Although it includes:

* A light/night mode
* Mathjax support

## Getting Started

To use it, download it or clone into your themes directory:

```
$ cd themes && git clone https://github.com/uzluisf/junto.git
```

Then reference it in your `config`:

```
theme = "junto"
```

Or when building the site, pass it in to the CLI:

```
$ hugo -t junto
```

## Customizing

Your `config` file will hold all your options. Take a look at 
`exampleSite/config.toml` for the available configurations:

```yaml
baseURL = "https://uzluisf.github.io/"
title = "Your Blog Title"
theme = "junto"
```
## License

Licensed under the MIT License. See the [LICENSE](LICENSE).
