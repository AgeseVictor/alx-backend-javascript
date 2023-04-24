export default function updateStudentGradeByCity(stList, city, newGrades) {
  return [...stList].filter((x) => x.location === city).map((item) => {
    const gr = newGrades.filter((y) => y.studentId === item.id).map((p) => p.grade)[0];
    const grade = gr || 'N/A';
    return { ...item, grade };
  });
}
