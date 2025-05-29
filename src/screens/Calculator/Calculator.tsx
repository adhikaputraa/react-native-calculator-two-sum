import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);

  // Use useCallback for event handlers to prevent unnecessary re-renders
  const addNumbers = useCallback(() => {
    const num1 = parseFloat(firstNumber) || 0;
    const num2 = parseFloat(secondNumber) || 0;
    setTotal(num1 + num2);
  }, [firstNumber, secondNumber]);

  const handleFirstNumberChange = useCallback((text: string) => {
    setFirstNumber(text);
  }, []);

  const handleSecondNumberChange = useCallback((text: string) => {
    setSecondNumber(text);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adding Two Numbers</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter first number"
          value={firstNumber}
          onChangeText={handleFirstNumberChange}
          keyboardType="numeric"
          accessibilityLabel="First number input"
        />
        
        <Text style={styles.inputLabel}>Second Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          value={secondNumber}
          onChangeText={handleSecondNumberChange}
          keyboardType="numeric"
          accessibilityLabel="Second number input"
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={addNumbers}
          accessibilityLabel="Calculate the sum"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Calculate Sum</Text>
        </TouchableOpacity>
      </View>
      
      {total !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.resultValue}>{total}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    color: '#34495e',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: '#e1e8ed',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  resultContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 25,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});

export default Calculator;
