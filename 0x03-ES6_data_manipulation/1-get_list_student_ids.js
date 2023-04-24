export default function getListStudentIds(stList) {
  if (Array.isArray(stList)) return stList.map((item) => item.id);
  return [];
}
