# [Tailor](https://tailor-hub.com/) [Next.js](https://nextjs.org/) application generator with [Styled-components](https://www.styled-components.com/) & [i18n](https://github.com/isaachinman/next-i18next) translation module.

![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--uvGXwDgY--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/bc0h3lav5bvg04pn5mxv.png)

## Introduction

`tailor_next_generator` is Tailor's NPM package that allows us to quickly create next.js projects with the basic configuration. 


## Installation

Install `tailor_next_generator` as a global NPM package, so you can run it from anywhere in your computer:

```sh
$ npm install -g tailor_next_generator
```

Or use `npx`;
```sh
$ npx tailor_next_generator new-project/
```

## Quick Start

The quickest way to get started with next.js is to utilize the executable `tailorgenerate(1)` to generate an application as shown below:

Create the app:

```bash
$ tailorgenerate new-project/
$ cd new-project/
```

This will generate the following directory structure:

```
new-project/
├── .babelrc
├── next.config.js
├── package.json
├── content
├── components
│   └── Meta.js
├── static
│    ├── fonts
│    ├── svg
│    └── img
├── pages
│    ├── index.js
├── styles
│   ├── fontsStyles
│   ├── pagesStyles
├── .env
├── .gitignore

```

Install all dependencies described in `package.json`:

```bash
$ npm i
```

Start your next.js app:

```bash
$ npm run dev
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help           output usage information
        --git            initialise a Git project
        --i18n           i18n translation module configuration

## License

[MIT](LICENSE)
