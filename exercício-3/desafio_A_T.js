// Exercício 3-A: filter e find - Feito por Thalyta Ferreira

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];


//Usando filter para encontrar estudantes inativos
const estudantesInativos = students.filter((student) => !student.active);
console.log("\nEstudantes inativos:", estudantesInativos);