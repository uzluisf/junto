# Junto

A (mostly) feature-less Hugo website template focused on practicality.

![Content](/images/screenshot.png)
![Dark](/images/tn.png)

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

To use it, download it or clone into your `themes` directory:

```
$ cd themes && git clone https://github.com/uzluisf/junto.git
```

Then reference it in your `config.toml`:

```
theme = "junto"
```

Or when building the site, supply the theme to hugo in terminal:

```
$ hugo -t junto
```

### Creating a new website

If you still don't have a website, first create a skeleton for 
your site by running:

```
$ hugo new site your-website-dir
```

Then 

```
$ cd your-website-dir/themes/
```

and run `git clone https://github.com/uzluisf/junto.git`. Alternatively, 
download the theme and place there.

If you don't have any content yet, copy the content of `junto/exampleSite`
into the root of `your-website-dir`. The theme should already be set in the 
`config.toml` file.

Now you should be able to run: `$ hugo server` at your root directory and 
watch your website live at `http://localhost:1313/`.

## Customizing

Your `config.toml` file will hold all your options. Take a look at 
`exampleSite/config.toml` for the available configurations:

```yaml
baseURL = "https://uzluisf.github.io/"
title = "Your Blog Title"
theme = "junto"
```

## License

Licensed under the MIT License. See the [LICENSE](LICENSE).
