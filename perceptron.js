class Perceptron {
  constructor(inputSize, learningRate) {
    this.weights = new Array(inputSize);
    this.bias = 0;
    this.learningRate = learningRate;

    // Inicializa os pesos aleatoriamente
    for (let i = 0; i < inputSize; i++) {
      this.weights[i] = Math.random();
    }
  }

  predict(inputs) {
    let sum = 0;

    // Realiza a soma ponderada dos inputs
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    // Aplica a função de ativação (função degrau)
    return sum >= 0 ? 1 : 0;
  }

  train(inputs, label) {
    const prediction = this.predict(inputs);
    const error = label - prediction;

    // Atualiza os pesos e bias
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learningRate * error * inputs[i];
    }

    this.bias += this.learningRate * error;
  }
}
