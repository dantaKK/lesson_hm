# 双token鉴权
- JWT JSON Web Token

- 单token 长时间 不安全

- 签证access token refresh 
  - access token 负责验证功能 expiresIn 读一些， 安全
  refresh_token 
  - 401 access_token 失效
    refresh_token - > /api/refresh
    新的token 
  - 无感刷新
  - 