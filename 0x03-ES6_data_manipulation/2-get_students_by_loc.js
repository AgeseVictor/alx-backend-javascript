export default function getStudentsByLocation(stList, city) {
  return [...stList].filter((x) => x.location === city);
}
