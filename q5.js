const calculateFactorial=n=> n < 0?null: n <= 1 ? 1 : n * calculateFactorial(n - 1);