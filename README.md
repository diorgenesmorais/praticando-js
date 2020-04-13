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

