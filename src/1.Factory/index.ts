
class Mother {
  static giveMe(whatYouWant) {
    switch (whatYouWant) {
      case 'tangtang':
        console.log('宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~');
        return Mother.chewJelly(new Jelly);
      case 'feifei':
        console.log('宝宝，家里已经买了很多飞机了哦');
        return null;
      default:
        return null;
    }
  }

  static chewJelly(jelly) {
    jelly.chewed = true;
    return jelly;
  }
}

// 果冻类
class Jelly{
  // 是否咀嚼过的果冻
  chewed = false;
}

// 玩具飞机
class ToyPlane {}
