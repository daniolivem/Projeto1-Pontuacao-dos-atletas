
# Pontuação dos Atletas

## Resumo do Projeto

Este projeto é uma aplicação em JavaScript desenvolvida para calcular a média das notas de atletas em uma competição de ginástica artística, seguindo regras específicas para o descarte da maior e menor nota. O objetivo é facilitar o processo de apuração dos resultados, tornando-o rápido, confiável e transparente.

## Introdução

Em competições de ginástica artística, cada apresentação é avaliada por cinco jurados, cada um atribuindo uma nota de 1 a 10 para diferentes critérios:

- **Tempo de duração da apresentação**
- **Originalidade da coreografia**
- **Postura do atleta**
- **Dificuldade das acrobacias**
- **Sincronismo**

Para o cálculo da média final, a maior e a menor nota são descartadas. A média é feita com as três notas restantes.

## Objetivo

- Receber o nome e as cinco notas de cada atleta.
- Calcular a média válida (descartando a maior e a menor nota).
- Exibir o nome do atleta, as notas em ordem crescente e a média calculada.

## Especificações

- A entrada é uma matriz de objetos, cada um contendo o nome do atleta e um array com suas cinco notas.
- A saída exibe os dados formatados por atleta.
- O código está em JavaScript puro, fácil de rodar em qualquer ambiente moderno.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (opcional, para execução via terminal)
- Editor de código (Visual Studio Code, Sublime, etc.)
- Ou simplesmente um navegador web moderno

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/daniolivem/Projeto1-Pontuacao-dos-atletas.git
   cd Projeto1-Pontuacao-dos-atletas
   ```

2. Abra o arquivo `notas-atletas.js` em seu editor de preferência.

## Como Executar

### Usando Node.js

1. Certifique-se de que o [Node.js](https://nodejs.org/) está instalado.
2. No terminal, execute:
   ```bash
   node notas-atletas.js
   ```
   O resultado aparecerá no seu console.

### Usando o Navegador

1. Abra o arquivo `notas-atletas.js` em um editor.
2. Copie o código para o console do navegador (F12 > Console) e pressione Enter.

---

## Exemplo de Código

```javascript
let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

atletas.forEach(atleta => {
  let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
  let notasValidas = notasOrdenadas.slice(1, 4); // descarta a menor e a maior
  let media =
    notasValidas.reduce((acum, nota) => acum + nota, 0) / notasValidas.length;

  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
  console.log(`Média Válida: ${media.toFixed(2)}\n`);
});
```

### Exemplo de Saída

```
Atleta: Cesar Abascal
Notas Obtidas: 7.88,8.42,9.34,10,10
Média Válida: 9.25

Atleta: Fernando Puntel
Notas Obtidas: 7,8,9.33,10,10
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,8,9.5,9.5,10
Média Válida: 9.00

Atleta: Bruno Castro
Notas Obtidas: 9,9.5,10,10,10
Média Válida: 9.83
```

---

## Dicas

- Use `.slice()` para não modificar o array original de notas.
- Utilize `.sort()` para garantir o descarte correto das notas.
- Use `toFixed(2)` para exibir a média com duas casas decimais.

---

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## Possíveis Melhorias

- Interface gráfica para entrada de dados dos atletas
- Validação automática das notas (faixa entre 1 e 10)
- Geração de relatório em PDF ou CSV
- Testes automatizados
- Suporte a diferentes idiomas

---

## Licença

Este projeto é livre para uso educacional.

