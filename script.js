function fib() {
      var a = 1;
      var b = 1;
      var c;
      for (var i = 3; i <= num; i++) {
      c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
    var num = Number(prompt('input num'));
    alert(fib());