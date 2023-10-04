# design-pattern

学习设计模式

设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

- https://refactoringguru.cn/design-patterns/catalog
- https://github.com/RefactoringGuru/design-patterns-typescript

## 设计模式的分类

看到一个模式, 就能迅速说出其关键特征, 适用场景, 举例

可参考 [菜鸟教程: 设计模式](https://www.runoob.com/design-pattern/design-pattern-tutorial.html) 学习透彻

并手动操作一遍示例, 加深理解

### 目录

- 创建型模式: 这类模式提供创建对象的机制， 能够提升已有代码的灵活性和可复用性。
  - 工厂方法模式 Factory Method(类)
  - 抽象工厂模式 Abstract Factory
  - 建造者/生成器模式 Builder
  - 原型模式 Prototype
  - 单例模式 Singleton
- 结构型模式: 这类模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。
  - [接口适配] 适配器模式 Adapter(类)
  - [接口适配] 桥接模式 Bridge
  - [接口适配] 外观模式 Facade
  - [抽象集合] 组合模式 Composite
  - [行为扩展] 装饰器模式 Decorator
  - [性能与对象访问] 享元模式 Flyweight
  - [性能与对象访问] 代理模式 Proxy
  - [性能与对象访问] 过滤器模式 Filter、Criteria
- 行为型模式: 这类模式负责对象间的高效沟通和职责委派（关注通信）。
  - [对象去耦] 中介者模式 Mediator
  - [对象去耦] 观察者模式 Observer
  - [抽象集合] 迭代器模式 Iterator
  - [行为扩展] 访问者模式 Visitor
  - [行为扩展] 责任链模式 Chain of Responsibility
  - [算法封装] 模板模式 Template Method(类)
  - [算法封装] 策略模式 Strategy
  - [算法封装] 命令模式 Command
  - [对象状态] 备忘录模式 Memento
  - [对象状态] 状态模式 State
  - [其它] 解释器模式 Interpreter(类)
  - [其它] 空对象模式 Null Object
- J2EE 模式: 这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。
  - MVC 模式 MVC
  - 业务代表模式 Business Delegate
  - 组合实体模式 Composite Entity
  - 数据访问对象模式 Data Access Object
  - 前端控制器模式 Front Controller
  - 拦截过滤器模式 Intercepting Filter
  - 服务定位器模式 Service Locator
  - 传输对象模式 Transfer Object

设计模式之间的关系：

![the-relationship-between-design-patterns](./docs/img/the-relationship-between-design-patterns.jpg)

## 设计模式的六大原则（SOLID）

0. 总原则——开闭原则（Open Closed Principle）

    > 一个软件实体，如类、模块和函数应该**对扩展开放，对修改关闭**。

    开闭原则的意思是：对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。

    想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。

1. 单一职责原则（Single Responsibility Principle）

    > 一个类应该只有一个发生变化的原因。

    不要存在多于一个导致类变更的原因，也就是说每个类应该实现单一的职责，否则就应该把类拆分。

2. 里氏代换原则（Liskov Substitution Principle）

    > 所有引用基类的地方必须能透明地使用其子类的对象。

    里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。里氏代换原则(LSP)是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。

    里氏代换原则是对“开-闭”原则的补充。实现“开闭”原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以里氏替换原则是对实现抽象化的具体步骤的规范。里氏替换原则中，**子类对父类的方法尽量不要重写和重载**。因为父类代表了定义好的结构，通过这个规范的接口与外界交互，子类不应该随便破坏它。

3. 依赖倒置原则（Dependence Inversion Principle）

    > 1、上层模块不应该依赖底层模块，它们都应该依赖于抽象。
    >
    > 2、抽象不应该依赖于细节，细节应该依赖于抽象。

    这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

    面向接口编程，依赖于抽象而不依赖于具体。写代码时用到具体类时，不与具体类交互，而与具体类的上层接口交互。

4. 接口隔离原则（Interface Segregation Principle）

    > 1、客户端不应该依赖它不需要的接口。
    >
    > 2、类间的依赖关系应该建立在最小的接口上。

    每个接口中不存在子类用不到却必须实现的方法，如果不然，就要将接口拆分。使用多个隔离的接口，比使用单个接口（多个接口方法集合到一个的接口）要好。

    它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

5. 迪米特法则，又称最少知道原则（Demeter Principle）

    > 只与你的直接朋友交谈，不跟“陌生人”说话。

    最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

    一个类对自己依赖的类知道的越少越好。无论被依赖的类多么复杂，都应该将逻辑封装在方法的内部，通过public方法提供给外部。这样当被依赖的类变化时，才能最小的影响该类。

    最少知道原则的另一个表达方式是：只与直接的朋友通信。类之间只要有耦合关系，就叫朋友关系。耦合分为依赖、关联、聚合、组合等。我们称出现为成员变量、方法参数、方法返回值中的类为直接朋友。局部变量、临时变量则不是直接的朋友。我们要求陌生的类不要作为局部变量出现在类中。

6. 合成复用原则（Composite Reuse Principle）

    > 尽量使用对象组合/聚合，而不是继承关系达到软件复用的目的。

    合成或聚合可以将已有对象纳入到新对象中，使之成为新对象的一部分，因此新对象可以调用已有对象的功能。

> 记忆口诀：SOLID CD（稳固的CD）。

参考:

- 推荐: https://refactoringguru.cn/design-patterns/catalog
- [菜鸟教程: 设计模式](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)
- https://blog.csdn.net/mq2553299/article/details/80962335
- https://blog.csdn.net/cooldragon/article/details/52164380
- [Observer vs Pub-Sub pattern](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c)
- https://github.com/kamranahmedse/design-patterns-for-humans
- https://github.com/fbeline/design-patterns-JS
- https://github.com/Sairyss/domain-driven-hexagon
- https://github.com/rmanguinho/clean-ts-api
- https://github.com/RefactoringGuru/design-patterns-typescript
  - [深入设计模式](https://refactoringguru.cn/design-patterns/typescript)
- https://github.com/rmanguinho/advanced-node 收费教程
- https://github.com/ryouaki/ECMAScript2016-Design-Patterns
- [快速记忆23种设计模式](https://zhuanlan.zhihu.com/p/128145128)
