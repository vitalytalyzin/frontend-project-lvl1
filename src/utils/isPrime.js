const isPrime = (value) => {
  const halfOfValue = value / 2;

  for (let i = 2; i < halfOfValue; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

export default isPrime;
