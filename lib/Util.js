module.exports = {
  compose: compose
};

function compose (...functions) {
  return (arg) => {
    return functions.reduceRight(
      (previous, current) => {
        return current(previous);
      },
      arg);
  };
}
