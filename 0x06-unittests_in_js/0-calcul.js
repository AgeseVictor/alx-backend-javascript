module.exports = function calculateNumber(a, b) {
  const an = Number(a);
  const bn = Number(b);
  if (Number.isNaN(an) || Number.isNaN(bn))
    throw TypeError('arguments must be numbers');
  return Math.round(an) + Math.round(bn);
};
