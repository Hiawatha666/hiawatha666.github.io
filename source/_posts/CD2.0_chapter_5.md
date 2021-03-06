---
title: 第五章 持续交付的软件系统架构
date: 2019-09-25 21:00:00
author: Hiawatha
cover: true
categories: CD
tags:
  - CI/CD
---
# 第五章 持续交付的软件系统架构
要达到持续交付的效果，不光是交付层面的改进，业务代码层面也需要配合改进  ·
亚马逊降低系统耦合向微服务进化的方法 
1. 所有团队都要以服务接口的方式，提供数据和各种功能。
2. 团队之间必须通过接口来通信。
3. 不允许任何其他形式的互操作：不允许直接读取其他团队的数据，不允许共享内存，不允许任何形式的后门。唯一许可的通讯方式就是通过网络调用服务。
4. 具体的实现技术不做规定，HTTP、Corba、Pub/Sub方式、自定义协议皆可。
5. 所有的服务接口，必须从一开始就以可以公开为设计导向，没有例外。这就是说在设计接口的时候，就默认这个接口可以对外部人人员开放，没有讨价还价的余地。 

为了更好地应对业务发展，持续交付是必然趋势，在软件系统架构方面的“大系统小做”原则是促进这一目标达成的必要条件。

## 5.1 “大系统小做”原则
### 5.1.1 持续交付框架要求
为了提升交付速度，获得持续交付能力，系统架构在设计时应该考虑如下因素。  
1. 为测试而设计（design for test）。可以快速对软件进行测试
2. 为部署而设计（design for deployment）可以快速部署软件 
3. 为监控而设计（design for monitor）设计时提供监控的接口，收集到数据才会有持续集成的收益  
4. 为扩展而设计（design for scale）两方面，团队成员的扩展和系统自身的扩展  
5. 为失效而设计（design for failure）如果部署或发布失败，如何快速且优雅的处理  

### 5.1.2 系统拆分原则
1. 作为系统的一部分，每个组件或服务有清晰的业务职责，可以被独立修改，甚至被另一种实现方案所替代。
2. “高内聚、低耦合”，使整个系统易于维护，每个组件只知道尽可能少的信息，完成相对独立的单一功能。
3. 整个系统易于构建和测试。将系统拆分后，这些组件仍需要组合在一起，为用户提供服务。因此如果构建和测试困难，就很难缩短开发周期，无法达到“持续交付”的目标。
4. 使团队成员之间的沟通协作更加顺畅。

## 5.2 常见架构模式
### 5.2.1 微核架构（microcore architecture）
**适用于客户端软件**  
软件的核心框架相对较小，而其主要业务功能和业务逻辑都通过插件实现。核心框架部分通常只包含系统启动运行的基础功能，例如基础通信模块、基本渲染功能和界面整体框架等。插件则是相互独立的，插件之间的通信只通过核心框架进行，避免出现相互依赖的问题。  
优点：
* 良好的功能延展性：需要什么功能，开发个插件即可
* 易发布：插件插件可以独立的加载和卸载，使它比较容易发布
* 易测试：功能之间是隔离的，可以对插件进行隔离测试。
* 可定制性高：适应不同的开发需要。
* 可以渐进式的开发：逐步增加功能  

缺点：
* 扩展性差：内核是独立单元，不容易做分布式，但对于客户端软件来说这就不是一个严重问题
* 开发难度相对较高
* 高度依赖框架

### 5.2.2 微服务架构（Microservice Architecture）
他提倡将单一应用程序划分成一小组的服务服务之间相互协调、相互配合，为用户提供最终价值。每个服务运行在其独立的进程中，服务与服务之间相互协调、相互配合，为用户提供最终价值。每个服务运行在其独立的进程中，服务与服务之间采用轻量级的通信机制相互沟通（通常是基于HTTP协议的RESTful API）。每个服务都围绕着具体业务进行构建，并且能够被独立的部署到生产环境。另外，应当尽量避免统一的、集中式的管理机制，对具体的一个服务而言，应根据上下文，选择合适的语言、工具对其进行构建。  
优点：  
* 扩展性好
* 易部署
* 易开发
* 易于单独测试  

不足：
* 系统依赖大量的微服务，变的凌乱和笨重，网络通信消耗较大
* 一次请求会涉及内部多个服务之间的通信，使得问题的调试与诊断比较困难，需要更强大的工具支持。

### 5.2.3 巨石应用（monolithic application）
从头到尾完成某个功能的所有步骤，只要有这一个包，其他什么都有了。  
组织良好的巨石架构同样也有优势：  
* 利与开发和调试：当前所有开发工具和IDE都很好的支持巨石应用的开发。系统架构简单，调试方便。
* 部署操作简单
* 容易扩展  

劣势：
* 持续部署困难
* 只能将整个应用作为一个整体进行扩展
* 难与新技术共存

产品和公司所处的时期不同，可以选用不同的架构策略

## 5.3 架构改造实施模式
### 5.3.1 拆迁者模式
是指根据当前业务结构，对软件架构完全重新设计，并组织单独的团队，重新开发一个全新版本，一次性完全替代原有的遗留系统。  
好处：与旧版本无瓜葛，没有历史包袱，可以按预期进行架构设计。  
缺点：可能会遗漏历史版本中很多不为人知的功能；市场环境变化时可能错失良机；人力消耗大；新版本上线未必满足业务需求
### 5.3.2 绞杀者模式
保持原来的遗留系统不变，当需要开发新的功能时，重新开发一个服务，实现新的功能。通过不断构建新的服务，逐渐替换老系统。  
**优势：**
* 不会遗漏原有需求
* 可以稳定的提供价值，频繁地交付版本，可以让你更好地监控其改造进展
* 避免闭门造车  

**劣势：**
* 架构改造的时间跨度会变大；
* 产生一定的迭代版本
### 5.3.3 修缮者模式
指将遗留系统的部分功能与其余部分隔离，以新的架构进行单独改善。在改善的同时，需要保证与其他部分仍能协同工作。其改造在原系统内部。  
**优势：**  
* 系统外部无感知
* 不会遗漏原需求
* 可以随时停下改造工作，响应高优先级的业务需求
* 避免闭门造车  

**劣势：**
* 架构改造的时间跨度会变大
* 会有更多的迭代版本

### 5.3.4 数据库的拆分方法
（1）详细了解数据库结构，包括外键约束、共享的可变数据以及事务性边界  
（2）先拆分数据库  
（3）数据库双写无误后，找到程序架构中的缝隙  
（4）将拆分出来的数据模块和数据库组合在一起，形成微服务。  
## 5.4 小结
微核架构模式适合客户端  
微服务架构模式适合于大型后台服务端系统  
巨石应用则适合于创业公司或中小型项目
