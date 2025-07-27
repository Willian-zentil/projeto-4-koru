// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

const medias = students
  .map((student) => {
    //calculando a media das notas
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;

    return {
      ...student,
      average: average,
    };
  })
  .filter((student) => student.active && student.average > 85);

//exibindo os resultados
console.log("Estudantes ativos com média acima de 85:");
medias.forEach((student) => {
  console.log(`${student.name}`);
});
