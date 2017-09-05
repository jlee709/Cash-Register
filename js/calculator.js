console.log('calculator linked');

  var calculatorModule = (function(){

  var memory = 0;
  var total = 0;

  var calculator = {
    
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide:divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory:clearMemory,
    
};
  /**
   * Validation
   */
   
   function validate(x){ 
     if (typeof x !== "number"){
     throw new Error("Input a Number");
     } 
 }

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load(x){
    
    validate(x);
    
    total = x;

      return total;
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */

   function getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
     validate(x);

    return total += x;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function subtract(x){
      validate(x);

      return total -= x;
    }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function multiply(x){
        validate(x);

        return total *= x;
    }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(x){
     validate(x);

     return total /= x;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

    function recallMemory(){
      return memory;
    }

  /**
   * Stores the value of `total` to `memory`
   */

    function saveMemory(){
      memory = total;

      return total;
    }

  /**
   * Clear the value stored at `memory`
   */

    function clearMemory(){
    

      memory = 0;

      return memory;
    }

    return calculator;

   });