let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('Enter first number:', 0);
    this.b = +prompt('Enter second number:', 0);
  }
};

calculator.read();
alert( `Addition: ${calculator.sum()}` );
alert( `Subtraction ${calculator.mul()}` );