class MPNeuron:
    def __init__(self, weights, threshold):
        self.weights = weights
        self.threshold = threshold

    def activate(self, inputs):
        activation = sum([w * x for w, x in zip(self.weights, inputs)])
        return 1 if activation >= self.threshold else 0

def AND_gate(inputs):
    weights = [1, 1]  
    threshold = 2     
    neuron = MPNeuron(weights, threshold)
    return neuron.activate(inputs)

def OR_gate(inputs):
    weights = [1, 1]  
    threshold = 1     
    neuron = MPNeuron(weights, threshold)
    return neuron.activate(inputs)

def main():
    print("Testing AND Gate:")
    print("AND(0, 0) =", AND_gate([0, 0]))
    print("AND(0, 1) =", AND_gate([0, 1]))
    print("AND(1, 0) =", AND_gate([1, 0]))
    print("AND(1, 1) =", AND_gate([1, 1]))

    print("OR(0, 0) =", OR_gate([0, 0]))
    print("OR(0, 1) =", OR_gate([0, 1]))
    print("OR(1, 0) =", OR_gate([1, 0]))
    print("OR(1, 1) =", OR_gate([1, 1]))

if __name__ == "__main__":
    main()
