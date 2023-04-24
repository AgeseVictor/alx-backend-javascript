export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let calls = weakMap.get(endpoint) || 0;
  calls += 1;

  weakMap.set(endpoint, calls);

  if (calls >= 5) {
    throw new Error('Endpoint load is high');
  }

  return calls;
}
