import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// Two Sum II solution function
const twoSum = (numbers: number[], target: number): number[] => {
  // Since the array is sorted in non-decreasing order, we can use two pointers approach
  // This solution has O(n) time complexity and O(1) space complexity
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    
    if (sum === target) {
      // Return 1-indexed values as per the requirement
      return [left + 1, right + 1];
    } else if (sum < target) {
      // If sum is less than target, move left pointer to the right
      left++;
    } else {
      // If sum is greater than target, move right pointer to the left
      right--;
    }
  }
  
  // According to the problem statement, there is exactly one solution
  // So this line should never be reached
  return [-1, -1]; 
};

const TwoSum = () => {
  const [inputArray, setInputArray] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [result, setResult] = useState<number[] | null>(null);
  const [explanation, setExplanation] = useState<string>('');

  // Use useCallback for event handlers
  const handleInputArrayChange = useCallback((text: string) => {
    setInputArray(text);
  }, []);

  const handleTargetChange = useCallback((text: string) => {
    setTarget(text);
  }, []);

  const calculateTwoSum = useCallback(() => {
    try {
      // Parse the input array and target
      const numbers = JSON.parse(`[${inputArray}]`);
      const targetNumber = parseFloat(target);
      
      // Validate inputs
      if (!Array.isArray(numbers)) {
        throw new Error('Please enter a valid array');
      }
      
      if (isNaN(targetNumber)) {
        throw new Error('Please enter a valid target number');
      }
      
      // Calculate the result
      const res = twoSum(numbers, targetNumber);
      setResult(res);
      
      // Generate explanation
      const firstIndex = res[0];
      const secondIndex = res[1];
      const firstValue = numbers[firstIndex - 1];
      const secondValue = numbers[secondIndex - 1];
      
      setExplanation(`The sum of ${firstValue} and ${secondValue} is ${targetNumber}. Therefore, index₁ = ${firstIndex}, index₂ = ${secondIndex}. We return [${firstIndex}, ${secondIndex}].`);
    } catch (error) {
      setResult(null);
      setExplanation(`Error: ${error instanceof Error ? error.message : 'Invalid input'}`);
    }
  }, [inputArray, target]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two Sum II - Input Array Is Sorted</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter numbers (comma separated):</Text>
        <TextInput
          style={styles.input}
          value={inputArray}
          onChangeText={handleInputArrayChange}
          placeholder="e.g., 2, 7, 11, 15"
          keyboardType="numeric"
          accessibilityLabel="Input array of numbers"
        />
        
        <Text style={styles.inputLabel}>Target:</Text>
        <TextInput
          style={styles.input}
          value={target}
          onChangeText={handleTargetChange}
          placeholder="e.g., 9"
          keyboardType="numeric"
          accessibilityLabel="Target sum value"
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={calculateTwoSum}
          accessibilityLabel="Calculate Two Sum"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      
      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Output:</Text>
          <Text style={styles.resultValue}>[{result.join(', ')}]</Text>
          <Text style={styles.resultLabel}>Explanation:</Text>
          <Text style={styles.resultValue}>{explanation}</Text>
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
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  resultValue: {
    fontSize: 16,
    marginBottom: 12,
    color: '#34495e',
    lineHeight: 24,
  },
});

export default TwoSum;
