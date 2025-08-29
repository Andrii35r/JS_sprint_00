function Calculator() {

    this.read = function() {
      this.a = +prompt('First number', 0);
      this.b = +prompt('Second number', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Addion:\n" + calculator.sum() );
  alert( "Multiplication:\n" + calculator.mul() );
alert(accumulator.value);
