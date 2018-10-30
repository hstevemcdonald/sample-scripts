// What is currying? - A popular technique functional programming of evaluating a function with multiple arguments into a function with a single argument
// Why is it useful? - Helps to avoid passing the same variable again and again, Allows re-use of 'pieces' of code

function foo(a) {
  console.log('a', a);
  return function bar(b) {
    console.log('b', b);
    return function(c) {
      console.log('c', c);
      return a + b + c;
    };
  };
}

let result = foo(2)(3)(4);
