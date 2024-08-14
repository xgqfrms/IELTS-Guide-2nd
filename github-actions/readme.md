# github actions

```sh
$ npm init

$ npm i -D @types/node

$ npm i -D typescript

```

https://www.typescriptlang.org/play


```sh
# tsconfig.json
$ tsc --init

```


```json
  "scripts": {
    "dev": "tsc -p tsconfig.json",
    "build": "tsc -p tsconfig.build.json",
    "test": "cd ./dist && node ./index.js && exit 0",
    "bug": "echo \"Error: no test specified\" && exit 1"
  },
```

## action.yml



## dedent

An ES6 string tag that strips indentation from multi-line strings.

从多行字符串中去除缩进的 ES6 字符串标签


```sh
$ npm i dedent

$ npm i -D @types/dedent


```

https://www.npmjs.com/package/dedent



## GitHub Actions Dependency


```sh
$ npm i @actions/core @actions/github

```

## webhook events & payloads

https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request



## test

```sh
$ npm run build

```
