/* Utility functions */
'use strict';

function compose (...functions) {
  return (arg) => {
    return functions.reduceRight(
      (previous, current) => {
        return current(previous);
      },
      arg);
  };
}

module.exports = {
  compose: compose
};
