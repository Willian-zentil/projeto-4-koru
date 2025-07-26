// Atividade feita por Michelle
// Exercício 1: Revisão de funções, spread e rest
//b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

function matchUsers(...usersList) {
  const usersAll = [].concat(...usersList);
  const usersValid = [];

  for (let i = 0; i < usersAll.length; i++) {
    const users = usersAll[i];
    if (users.name && users.email) {
      usersValid.push(users);
    }
  }
  return usersValid;
}

const usersForm = [
  {name:"Joana", email: "anadarc123@gmail.com"},
  {name:"Otávio", email: ""}
];

const usersImport = [
  {name: "John", email: "jhonny@gmail.com"},
  {name: "", email: "someone@gmail.com"}
];

const usersAPI = [
  {name: "Sarah", email:"sara@gmail.com"}
];

const usersFinal = matchUsers(usersForm, usersImport, usersAPI);

console.log("Usuários com cadastro completo:", usersFinal);




