# 一句话描述

> 目标: 一句话说清楚一个设计模式。

- 创建型模式: 这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。
- 结构型模式: 这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。
- 行为型模式: 这些设计模式特别关注对象之间的通信。

## 什么是 GOF（四人帮，全拼 Gang of Four）？

在 1994 年，由 Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides 四人合著出版了一本名为 Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素） 的书，该书首次提到了软件开发中设计模式的概念。

四位作者合称 GOF（四人帮，全拼 Gang of Four）。他们所提出的设计模式主要是基于以下的面向对象设计原则。

- 对接口编程而不是对实现编程。
- 优先使用对象组合而不是继承。

## GOF 23 个设计模式

1. 工厂模式 Factory Method(类)
2. 抽象工厂模式 Abstract Factory
3. 单例模式 Singleton
4. 建造者模式 Builder
5. 原型模式 Prototype
6. 适配器模式 Adapter(类)
7. 桥接模式 Bridge
8. 外观模式 Facade
9. 组合模式 Composite
10. 装饰器模式 Decorator
11. 享元模式 Flyweight
12. 代理模式 Proxy
13. 过滤器模式 Filter、Criteria
14. 中介者模式 Mediator
15. 观察者模式 Observer
16. 迭代器模式 Iterator
17. 访问者模式 Visitor
18. 责任链模式 Chain of Responsibility
19. 模板模式 Template Method(类)
20. 策略模式 Strategy
21. 命令模式 Command
22. 备忘录模式 Memento
23. 状态模式 State
24. 解释器模式 Interpreter(类)
25. 空对象模式 Null Object

## J2EE 模式

这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。

- MVC 模式（MVC Pattern）
- 业务代表模式（Business Delegate Pattern）
- 组合实体模式（Composite Entity Pattern）
- 数据访问对象模式（Data Access Object Pattern）
- 前端控制器模式（Front Controller Pattern）
- 拦截过滤器模式（Intercepting Filter Pattern）
- 服务定位器模式（Service Locator Pattern）
- 传输对象模式（Transfer Object Pattern）
