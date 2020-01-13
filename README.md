# json-api-fetch

## install

```
npm install json-api-fetch
```

## Getting started

```js
import JsonApiFetch from 'json-api-fetch'

const client = JsonApiFetch.create({
  baseUrl: 'http://example.com',
  errorInterceptor: (err) => {}
})

client
  .get('/something')
  .then((res) => {})
  .catch((err) => {})
```

## 说明

该库使用的是fetch，所以如果要在低版本浏览器运行，你可能仍然需要引入 [whatwg-fetch](https://github.com/github/fetch)。

## 作用

主要是为了统一前后端 restful api 的返回格式标准，所以后端需要按照 [https://jsonapi.org](https://jsonapi.org) 定义返回指定的数据格式。

不过，我做了一点小的修改：

1. Content-Type 字段没有使用规定的 [application/vnd.api+json](https://www.iana.org/assignments/media-types/application/vnd.api+json)，而是使用了 [application/json](https://www.iana.org/assignments/media-types/application/json)，因为很多安全策略配置的字段默认只有常用的 application/json，前者并没有完全的优势让我们使用它，至少我目前没发现。

2. errors 返回是一个对象而非数组。往往接口出现一个错误，后端没必要往下走，前端也应该及时给出提示。而非文档中的例子，这种场景基本不会出现：


```json
{
  "errors": [
    {
      "status": "403",
      "source": { "pointer": "/data/attributes/secretPowers" },
      "detail": "Editing secret powers is not authorized on Sundays."
    },
    {
      "status": "422",
      "source": { "pointer": "/data/attributes/volume" },
      "detail": "Volume does not, in fact, go to 11."
    },
    {
      "status": "500",
      "source": { "pointer": "/data/attributes/reputation" },
      "title": "The backend responded with an error",
      "detail": "Reputation service not responding after three requests."
    }
  ]
}
```

## 为什么不用axios?

因为 fetch 已经足够好，而且是 es 标准里的api。今后必然会全面原生支持，没有必要再引入一个过度复杂的库。

## todo

测试需要完善