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

function displayInPounds (pence) {
  pence = String(pence);
  switch (pence.length) {
    case 0:
      return '£0.00';
    case 1:
      return '£0.0' + pence;
    case 2:
      return '£0.' + pence;
    default:
      return '£' + pence.substring(0, pence.length - 2) + '.' + pence.substring(pence.length - 2);
  }
}

module.exports = {
  compose: compose,
  displayInPounds: displayInPounds
};
