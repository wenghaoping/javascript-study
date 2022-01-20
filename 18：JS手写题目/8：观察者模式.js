class Subject {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.state = "XXXX";
  }
  // 被观察者要提供一个接受观察者的方法
  attach(observer) {
    this.observers.push(observer);
  }

  // 改变被观察着的状态
  setState(newState) {
    this.state = newState;
    this.observers.forEach((o) => {
      o.update(newState);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(newState) {
    console.log(`${this.name}say:${newState}`);
  }
}

// 被观察者 灯
let sub = new Subject("灯");
let mm = new Observer("小明");
let jj = new Observer("小健");

// 订阅 观察者
sub.attach(mm);
sub.attach(jj);

sub.setState("灯亮了来电了");
