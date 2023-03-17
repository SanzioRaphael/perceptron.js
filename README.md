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
<p>Exemplo: <strong>const perceptron = new Perceptron(inputSize, learningRate);</strong></p>
</br>
</br>
<h1>Métodos</h1>
<sub><strong>predict(inputs)</strong>
O método predict recebe um vetor de entrada inputs e retorna a classe prevista pelo Perceptron. A classe prevista é calculada pela soma ponderada dos pesos associados a cada entrada e comparada a um limite, que é o bias. A função de ativação utilizada é a função degrau, que retorna 1 se o limite é ultrapassado e 0 caso contrário.</sub>
<p>Exemplo: 
<strong>const inputs = [0, 1, 0.5, 1.5];
const prediction = perceptron.predict(inputs);</strong></p>
</br>
</br>
