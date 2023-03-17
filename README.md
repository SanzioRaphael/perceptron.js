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
</br>
<p>Exemplo: 
  <strong><sub>const perceptron = new Perceptron(inputSize, learningRate);</sub></strong></p>
</br>
</br>
<h1>Métodos</h1>
<sub><strong>predict(inputs)</strong>
O método predict recebe um vetor de entrada inputs e retorna a classe prevista pelo Perceptron. A classe prevista é calculada pela soma ponderada dos pesos associados a cada entrada e comparada a um limite, que é o bias. A função de ativação utilizada é a função degrau, que retorna 1 se o limite é ultrapassado e 0 caso contrário.</sub>
</br>
<p>Exemplo: 
<strong>
<p><sub>const inputs = [0, 1, 0.5, 1.5];</sub></p>
<p><sub>const prediction = perceptron.predict(inputs);</sub></strong></p></p>
</br>
<h3>train(inputs, label)</h3>
<sub>O método train é responsável por atualizar os pesos do Perceptron. Recebe como argumento um vetor de entrada inputs e a classe real associada a esta entrada label. O erro é calculado como a diferença entre a classe real e a prevista. Os pesos são atualizados proporcionalmente ao erro e à taxa de aprendizado.</sub>
</br>
<p>Exemplo:
  <strong>
<sub>
  <p>const inputs = [0, 1, 0.5, 1.5];</p>
  <p>const label = 1;</p>
  <p>perceptron.train(inputs, label);</p>
</sub>
</strong>
</p>
