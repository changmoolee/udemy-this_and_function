class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHook = document.querySelector("#names");
    nameListHook.appendChild(field);
  }
}

const Person = {
  name: "Lee",
  arrowFn: () => {
    console.log("arrow", this);
  },
  callbackarrowO: function () {
    return [1].forEach((e) => {
      console.log("callback arrow o", this);
    });
  },
  callbackarrowX: function () {
    return [2].forEach(function (e) {
      console.log("callback arrow x ", this);
    });
  },
  method() {
    console.log("method", this);
  },
  callbackArrowInMethod() {
    return [1].forEach(function () {
      console.log("callbackArrowInMethod", this);
    });
  },
};

let obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
  arrowMethod: (x, y) => {
    console.log(this, x, y);
  },
};

obj.method(2, 3);

obj.arrowMethod(2, 3);

obj.method.call({ a: 4 }, 5, 6);

console.log(obj);

obj.method(2, 3);

// Person.arrowFn();
// Person.callbackarrowO();
// Person.callbackarrowX();
// Person.method();
// Person.callbackArrowInMethod();

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    this.names = ["Max", "Manu", "Anna"];
    this.currentName = 0;
    btn.addEventListener("click", () => {
      console.log(this);
    });
    // Alternative:
    // btn.addEventListener('click', this.addName.bind(this));
  }

  addName() {
    console.log(this);
    new NameField("max");

    // const name = new NameField(this.names[this.currentName]);
    // this.currentName++;
    // if (this.currentName >= this.names.length) {
    //     this.currentName = 0;
    // }
  }
}

const gen = new NameGenerator();
