## localStorage, sessionStorage 和 Cookies的区别？
1.生命周期方面：
localStorage: 数据没有过期时间，除非用户手动清除浏览器缓存或使用JavaScript代码删除，否则数据会一直存在。

sessionStorage: 数据在页面会话结束时被清除，这里的“页面会话”指的是打开页面到关闭页面这段时间，包括页面刷新和恢复（不包括浏览器关闭后重新打开的情况）。

Cookies: 可以设置一个过期时间（Expires/Max-Age属性），如果未设置，则默认为会话Cookie，在浏览器关闭时自动删除。
2. 大小
localStorage 和 sessionStorage: 大多数浏览器提供至少5MB的存储空间，但具体大小可能因浏览器而异。
Cookies: 通常每个域名最多只能存储4KB的数据。

3. Cookies 可以在HTTP请求过程中携带发送给服务器 
可以设置HttpOnly标志来防止JavaScript访问，从而降低XSS的风险；同时，可以通过设置Secure标志确保仅通过HTTPS传输。

4. 使用场景：
localStorage: 适合长期保存用户偏好设置、应用状态等。
sessionStorage: 适用于临时保存信息，如在一个标签页内进行的操作，关闭标签页后无需保留的信息。
Cookies: 主要用于保持用户的登录状态、个性化设置以及跟踪用户行为等需要在客户端和服务器之间交换的信息。

## cookie的缺点?想要限制cookie只读怎么设
存储容量有限：大多数浏览器限制每个域名的cookie大小不能超过4KB。

影响性能：由于cookie在每次请求时都会被发送到服务器，这会增加额外的数据传输量，尤其是对于包含大量数据的cookie来说，会影响网页加载速度和整体性能。

安全性问题：
如果没有设置安全标志（Secure flag），cookie可以通过非HTTPS连接被窃取。
如果没有HttpOnly标志，JavaScript可以访问cookie，这使得XSS攻击更加容易获取用户的敏感信息。

隐私问题：cookie常用于追踪用户行为，这可能会引发隐私方面的担忧。


Secure 标志：确保cookie仅在通过HTTPS协议发送的请求中被传送，避免通过不安全的HTTP连接泄露。
HttpOnly 标志：当设置一个cookie时，如果加上了HttpOnly属性，那么这个cookie将不能通过JavaScript的Document.cookie API访问，从而有助于防止跨站脚本(XSS)攻击。

## cookie还可以设置哪些属性?
1. sucure 只通过HTTPS 发送
2. httponly xss JS 无法访问cookie
3. Expires/MAX-age 过期时间
4. Domain 哪些域名跨域访问cookie
