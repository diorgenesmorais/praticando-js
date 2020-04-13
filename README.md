# Desafio

> Exercício do modulo 1 do curso Javascript ES6 da Rocketseat

### 1º exercício

Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

execute
```
npm test
```
resultado:
```js
  Admin test
    ✓ Should instance
    ✓ Should be administrator

  User test
    ✓ Should instance
    ✓ Should not be an administrator


  4 passing (5ms)
```

### 2º Exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

```
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```

- map: Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

- filter: Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

- find: Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

- unindo operações: Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:

### 4º Exercício
A partir do seguinte objeto:

```js
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
```

- Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis.

- 4.2 Desetruturação em parâmetros

```js
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
```

### 5ª Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:

- 5.1 Rest - A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.

```js
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```

- 5.2 Spread - A partir do objeto e utilizando o operador spread:

```js
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
	cidade: 'Rio do Sul',
	uf: 'SC',
	pais: 'Brasil',
    }
};
```

- Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.

- Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.


