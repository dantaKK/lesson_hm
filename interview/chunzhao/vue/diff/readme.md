# diff 算法

ABCDE EABCD

- 处理新VDOM 第一个节点 E 
  在old 找到E， 位置为 4
  patch 更新 
  latestIndex 为 4
  
  ABCDE  

- 处理 A 
  i=1 
  找到 A 在 old  中的位置 j=0
  j<lastIndex 
  虚拟DOM el 指向真实dom
  E.el -> nextSibling
  
  BCDEA

- 处理 B
  i=2
  j=1
  A.el -> nextSibling
  
  CDEAB

- 处理 C
  i=3
  j=2
  B.el -> nextSibling
 
 移动次数太多 

 移动次数太多 如何解决 ？