假设你在开发一个新功能，不太方便添加到仓库，但是有一个main 紧急bug 需要去完成
- feature1 
  a.txt
  b.txt
  git add .
  git commit -m ""
- main
  停下 -> fixed bug

- git stash   (栈)
  暂时保存代码
- git stash list
- git checkout main
  ......
- git stash pop

- git status
- git branch 
- git checkout -b feature2
- git checkout feature2 
- git merge main 合并
- git add b.txt 添加新的