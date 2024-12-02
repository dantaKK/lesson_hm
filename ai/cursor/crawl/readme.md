// 爬虫+cursor+Qwen-cider 模型 实现 数据抓取+数据分析+数据可视化
- node的模块系统
  依赖 request-promise 发送 http请求，得到html字符串
  cheerio 内存中的浏览器， load(html),得到查询器( $ )
  $('.jc table tr')