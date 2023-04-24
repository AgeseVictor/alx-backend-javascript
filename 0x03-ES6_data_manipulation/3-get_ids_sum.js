export default function getStudentIdsSum(stList) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return [...stList].map((item) => item.id).reduce(reducer);
}
