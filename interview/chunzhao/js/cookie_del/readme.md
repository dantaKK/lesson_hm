# 如何删除cookie

- cookie 本地存储 请求传输 4kb
- Domain 域名
  document.cookie='token=123;domain=baidu.com'
- path 路径
  document.cookie='token=123;path=/a/b/c'
- Expires/Max-Age 过期时间
  document.cookie='token=123;expires=Sat, 1 Jan 2020 00:00:00 GMT'
  document.cookie='token=123;max-age=3600'
- Secure 安全传输 只在https 下传输
  document.cookie='token=123;secure'
- HttpOnly 只能服务端设置 不能通过js获取 防止xss攻击
  document.cookie='token=123;httpOnly'
- SameSite 限制第三方网站不能获取cookie 防止csrf攻击
  - Strict 完全禁止第三方网站获取cookie
  - Lax 允许第三方网站获取cookie 但是必须是get请求
  - None 允许第三方网站获取cookie 但是必须是get请求