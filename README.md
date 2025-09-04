- DESAFIOS

[] - Não deixar mesmo user votar mais do que 1x (pode simular uma sessão de login com local storage)
[] - Caso user já tenha votado: atualizar o voto dele
[] - Lidar com erros das chamadas à API usando try/catch ou then/catch
[] - Não usar innerHTML no JS (usar elemento template do html por exemplo)
[] - Usar reduce para contar os votos, ao invés de:

```js
let votes = {};
for (let i = 0; i < allVotes.length; i++) {
  const currentVote = allVotes[i];
  const option = currentVote.superpower;

  if (votes[option]) {
    votes[option] = votes[option] + 1;
  } else {
    votes[option] = 1;
  }
}
```
