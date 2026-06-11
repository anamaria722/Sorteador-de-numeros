# 🎲 Sorteador de Números

Aplicação web que sorteia números aleatórios dentro de um intervalo definido pelo usuário, sem repetição.

## ✨ Funcionalidades

- Definir a **quantidade** de números a sortear
- Definir o **intervalo** (de qual número até qual número)
- **Prevenção de duplicatas** — nenhum número se repete no resultado
- **Validação** do intervalo: alerta o usuário caso a quantidade pedida seja maior do que os números disponíveis
- Botão **Reiniciar** que limpa os campos e o resultado (habilitado apenas após um sorteio)

## 🗂️ Estrutura do Projeto

```
sorteador-de-numeros/
├── index.html    # Estrutura da página
├── style.css     # Estilização (layout, cores, responsividade)
├── app.js        # Lógica de sorteio e interação
└── img/
    ├── ia.png        # Imagem decorativa (astronauta)
    ├── code.png      # Imagem de fundo
    └── Ruido.png     # Textura do card
```

## 🚀 Como usar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` no navegador

   > **Dica:** use a extensão **Live Server** no VS Code para visualizar com recarregamento automático.

3. Preencha os campos:
   - **Quantidade de números** — quantos números deseja sortear
   - **Do número** — início do intervalo
   - **Até o número** — fim do intervalo
4. Clique em **Sortear**
5. Para fazer um novo sorteio, clique em **Reiniciar**

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e responsividade |
| JavaScript (ES6+) | Lógica da aplicação |
| Google Fonts | Fontes *Chakra Petch* e *Inter* |

## 📐 Lógica principal

```js
// Sorteia sem repetição usando um array de controle
let sorteados = [];
for (let i = 0; i < quantidade; i++) {
    let numero = obterNumeroAleatorio(de, ate);
    while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
}
```

## 📱 Responsividade

Em telas menores que **1250px**, a imagem decorativa é ocultada e o título reduz de tamanho para melhor legibilidade.

## 📌 Possíveis melhorias futuras

- Exibir os números em cards animados
- Permitir ordenar o resultado (crescente/decrescente)
- Histórico dos sorteios realizados na sessão
- Suporte a tema claro/escuro
