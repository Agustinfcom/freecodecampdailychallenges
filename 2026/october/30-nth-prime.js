/*
Nth Prime

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.
*/ function nthPrime(n) {
  let primeIndex = 0;
  let realNumber = 1;
  while (true) {
    realNumber++;
    if (isPrime(realNumber)) {
      primeIndex++;
      if (primeIndex == n) return realNumber;
    }
  }
}
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
