const getGcd = (value1, value2) => {
  const biggerValue = value1 > value2 ? value1 : value2;

  for (let i = biggerValue; ; i -= 1) {
    if (value1 % i === 0 && value2 % i === 0) {
      return i;
    }
  }
};

export default getGcd;
