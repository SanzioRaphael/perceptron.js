CDN: https://cdn.jsdelivr.net/gh/SanzioRaphael/perceptron.js@b694883851fb2b64a579d34d8c9f6d6777aa79d4/perceptron.min.js
</br></br>
# perceptron.js
</br>
<h1>Introdução</h1>
<sub>A biblioteca Perceptron implementa o algoritmo de treinamento de um único neurônio artificial, chamado Perceptron. O objetivo é classificar dados em duas classes distintas, ou seja, é uma biblioteca de aprendizado supervisionado binário.</sub>
</br>
</br>
<h1>Instalação</h1>
<sub>Para utilizar esta biblioteca, você pode clonar o repositório a partir do GitHub e incluir o arquivo perceptron.js no seu projeto. O código foi escrito em JavaScript, portanto, pode ser executado em qualquer ambiente que suporte esta linguagem.</sub>
</br>
</br>
<h1>Utilização</h1>
<sub>Para começar a utilizar a biblioteca, você deve criar uma instância da classe Perceptron. É necessário passar dois argumentos para o construtor: o tamanho do vetor de entrada e a taxa de aprendizado (learning rate). O tamanho do vetor de entrada é o número de características que o seu conjunto de dados possui.</sub>
</br></br>
<p>Exemplo:</p>
<sub><p>const perceptron = new Perceptron(inputSize, learningRate);</sub></p>
</br>
</br>
<h1>Métodos</h1>
<h3>predict(inputs)</h3>
O método predict recebe um vetor de entrada inputs e retorna a classe prevista pelo Perceptron. A classe prevista é calculada pela soma ponderada dos pesos associados a cada entrada e comparada a um limite, que é o bias. A função de ativação utilizada é a função degrau, que retorna 1 se o limite é ultrapassado e 0 caso contrário.</sub>
</br></br>
<p>Exemplo:</p>
<sub><p>const inputs = [0, 1, 0.5, 1.5];</p></sub>
<sub><p>const prediction = perceptron.predict(inputs);</p></sub>
</br></br>
<h3>train(inputs, label)</h3>
<sub>O método train é responsável por atualizar os pesos do Perceptron. Recebe como argumento um vetor de entrada inputs e a classe real associada a esta entrada label. O erro é calculado como a diferença entre a classe real e a prevista. Os pesos são atualizados proporcionalmente ao erro e à taxa de aprendizado.</sub>
</br></br>
<p>Exemplo:</p>
<sub><p>const inputs = [0, 1, 0.5, 1.5];</p></sub>
<sub><p>const label = 1;</p></sub>
<sub><p>perceptron.train(inputs, label);</p></sub>
</br></br>
<h1>Propriedades</h1>
<p><sub>O Perceptron possui três propriedades:</sub></p>
<sub><p>- weights: um vetor de pesos associados a cada entrada.</p></sub>
<sub><p>- bias: um valor adicionado à soma ponderada das entradas.</p></sub>
<sub><p>- learningRate: a taxa de aprendizado utilizada para atualizar os pesos.</p></sub>
</br></br>
<h1>Exemplo de uso</h1>
<p><sub>A seguir, um exemplo de utilização da biblioteca Perceptron para classificar o conjunto de dados Iris em duas classes: Iris setosa e Iris versicolor.</sub></p>
</br></br>
<p><sub>const perceptron = new Perceptron(4, 0.1);</sub></p>
<p><sub>// Dados de treinamento
const irisData = [
  { inputs: [5.1, 3.5, 1.4, 0.2], label: 1 }, // Iris setosa
  { inputs: [4.9, 3.0, 1.4, 0.2], label: 1 }, // Iris setosa
  { inputs: [7.0, 3.2, 4.7, 1.4], label: 0 }, // Iris versicolor
  { inputs: [6.4, 3.2, 4.5, 1.5], label: 0 }, // Iris versicolor
  ];</sub></p>
  </br>
  <p><sub>
 // Teste do Perceptron
for (let i = 0; i < irisTest.length; i++) {
const prediction = perceptron.predict(irisTest[i]);
console.log(Prediction: ${prediction});
}
  </sub></p>
  </br></br></br>
  <h3>
Neste exemplo, foram utilizados quatro atributos (comprimento da sépala, largura da sépala, comprimento da pétala e largura da pétala) para treinar o Perceptron a classificar duas espécies de Iris: setosa e versicolor. Os dados de treinamento foram passados para o método `train`, que atualizou os pesos do Perceptron. Em seguida, foram utilizados dados de teste para avaliar o desempenho do Perceptron. 

## Considerações finais
A biblioteca Perceptron é uma implementação simples do algoritmo de aprendizado de máquina para classificação binária. Ela pode ser utilizada como ponto de partida para construir algoritmos mais complexos, como redes neurais multicamadas. A taxa de aprendizado é um parâmetro importante que deve ser ajustado de acordo com o problema em questão. Caso a taxa de aprendizado seja muito alta, os pesos podem oscilar demasiadamente e impedir a convergência do algoritmo. Por outro lado, caso a taxa de aprendizado seja muito baixa, o treinamento pode demorar demasiadamente para convergir.
</h3>
