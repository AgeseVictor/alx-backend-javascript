export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  map.forEach((value, key, upd) => {
    if (value === 1) upd.set(key, 100);
  });
  return map;
}
