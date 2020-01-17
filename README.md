### Git推拉使用(git操作)

1.使用git去clone目标远程仓库 git clone '地址'

2.git branch 查看当前所有的分支

3.在本地创建并切换分支  git checkout -b dev  创建并切换到dev分支上

4.讲分支更新到远程仓库  git push -u origin dev  把本地dev分支推送到远程分支上

5.git branch --set-upstream-to=origin/dev  //  使用git pull 在远程dev上开发  拉取  
`// 这个设置好了 可以直接使用git pull git push 在dev上拉取推送消息`

6.git push(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

7.git merge dev 在当前分支上合并dev分支

8.`git reflog` 查看历史版本号

9.git reset --hard 版本号 实现版本回退 回退完直接push即可

30.本地代码与远程分支做关联 `git remote add origin git@'XXX仓库地址'`  
`git remote rm origin` 跟远程解除关联