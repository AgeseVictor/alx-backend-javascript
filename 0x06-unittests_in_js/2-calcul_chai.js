module.exports = function calculateNumber(type, a, b) {
  let an = Number(a);
  let bn = Number(b);
  if (Number.isNaN(an) || Number.isNaN(bn))
    throw TypeError('arguments must be numbers');
  an = Math.round(an);
  bn = Math.round(bn);
  switch(type) {
    case 'SUM':
      return an + bn;
    case 'SUBTRACT':
      return an - bn;
    case 'DIVIDE':
      if (bn === 0)
        return 'ERROR';
      return an / bn;
    default:
      throw Error('Invalid operator type');
  }
};
