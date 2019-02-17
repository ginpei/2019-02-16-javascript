// クラス定義
class Apple {
  constructor(el) {
    console.log('el', el);
    this.opened = false;
    this.el = el;
    this.elTop = el.querySelector('.apple-top');

    el.addEventListener('click', () => {
      this.onClick();
    });
  }

  onClick() {
    if (this.opened) {
      this.open('0px');
      this.opened = false;
    } else {
      this.open('-50px');
      this.opened = true;
    }
  }

  open(distance) {
    this.elTop.style.top = distance;
  }
}

// クラスを使ってオブジェクト作成
const elApple1 = document.querySelector('#apple1');
console.log('elApple1', elApple1);
const apple1 = new Apple(elApple1);

const apple2 = new Apple(document.querySelector('#apple2'));
