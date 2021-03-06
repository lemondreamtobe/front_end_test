### benchmark 文档

### 常用api讲解

### 其他工具
chromo
这个不仅仅可以对比你的算法哪一个性能更加，还可以分享出去；

### 还是缺少benchmark在实际项目中经验
> 主要是参考chromium团队对基准测试的缺点；

#### 好处
- 基础测试在一旦设计编写完毕之后，该测试就可以无限制的用来调整和优化代码；
- 在无用户数据的情况下，这种方式也是很好的参考标准；

#### 坏处
- 重写成本大：有时不得不从头重写一个全新的基准测试，而是更新已有的那个；
- 越来越复杂：即使现在可以准确的复现目前用户行为，他的配置会越来越复杂，风险越大；
- 不怀好意：有人会尝试利用每一个漏洞来获取好处，有的会通过限定继续对代码的深度优化；
- 有保质期：Chromium 团队宣称 Octane 基准测试已经到了收益递减的阶段，其中最主要是来自于对抗作弊，修改bug，或者添加新特性，需要不断的维护；

总之，
1. 如果做这些都是为了更好的测试分数而非用户时，这种行为被称为愚弄测试（Gaming the benchmark），
2. 最终并不是所有的测试都会没有价值，他们继续被使用，即使不能用于新的优化，至少可以用于性能回归测试；
3. 正是因为此，主张通过跟踪和性能分析收集真实场景下的性能测量数据来驱动性能提升；这个性能指标，是通过对用户的跟踪和分析收集而来的（有一定的弊端：关于数据来源和缺乏共享工具的问题）；
4. 过期的基准测试是一个问题，但是问题的解决方案应该是“更好的基准测试”，而非“不用基准测试”，应该去鼓励，教育大家去编写，去纠正它们难以编写，有误导性，或者纯粹不能用的污名；

### 备用知识：
- chromium中废弃Octanel; 原因是啥：主张通过跟踪和性能分析收集真实厂景下的性能测量数据来驱动性能提升。这种性能指标，是通过对用户的跟踪和分析收集而来的；


优秀的库：
1. web-tooling-benchmark 这个库，是由v8的团队输出的一个
https://github.com/v8/web-tooling-benchmark




