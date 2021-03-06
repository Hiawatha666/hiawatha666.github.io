---
title: 第三章 快速验证环
date: 2019-09-12 20:00:00
author: Hiawatha
cover: true
categories: CD
tags:
  - Hexo
  - hexo-theme-matery
  - CI/CD
---
# 第三章 快速验证环
## 3.1 验证环的目标
借助各种方法与工具，让质量可靠的解决方案以最快速度到达客户手中，从而收集并分析最真实的反馈。  
**以可靠的质量和最快的速度，将价值探索环得出的最小解决方案，从语言描述转换为可执行的软件包，并将其部署到生产环境中运行，准确收集相关数据并呈现，以便团队根据数据做出判断和决策**
## 3.2 验证环的4个关键环节
### 3.2.1 构建
根据非数字化描述转换为可运行的软件包  
任务分解，持续验证
### 3.2.2 运行
将达到质量要求的软件包部署到生产环境或交付到用户手中，并使之为用户提供服务。这个过程尽量让用户无感知，尽量自动化  
### 3.2.3 监测
收集生产系统中生产的数据，对系统进行监控，确保其正常运行。同时将业务数据以适当的形式及时呈现出来。
### 3.2.4 决策
根据数据，分析后决定是否符合最初预期，进而决定是否改变方向
## 3.3 工作原则
提升效率，消除浪费
### 3.3.1 质量内建
“发现错误的时间要尽可能接近引入该错误的时间”，发现越晚，影响越严重  
戴明博士，质量管理“十四要点”是全面质量管理的重要理论基础  
**质量内建**（built quality in）就是从生产过程的第一个环节开始，就要注重产出物的质量，并且在每个环节中都要开展质量保障活动，消除因质量问题导致的返工及次品率上升，以此降低最终的质量风险，保障进度。
### 3.3.2 消除等待
等待即“浪费”，消除等待，提升效率
1. 通过“拉动”让价值流动起来  
   管理者的关注点需要从“人”移动到“物”。解决人力瓶颈，下游环节（测试）拉动上游（开发）  
2. 任务自助化
   减少“专家”型人才被打扰的次数，在基础平台和工具上多投入，“做好一件事（一键式）”  
   例如搭建微服务测试环境
### 3.3.3 重复事物自动化
例如：搭建测试环境、回归测试、应用部署与发布等。避免不必要的人为操作失误，才能使其具有可持续性
### 3.3.4 监测一切
检测两点：
1. 软件是否正常运行，发现异常及时采取措施
2. 及时得到有效业务数据，验证探索环提出的假设
