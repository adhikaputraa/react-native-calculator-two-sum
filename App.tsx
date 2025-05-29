import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar } from 'react-native';

// Import our screens
import Calculator from './src/screens/Calculator/Calculator';
import Navbar from './src/screens/Navbar/Navbar';
import TwoSum from './src/screens/TwoSum/TwoSum';

// Create stack navigator with proper typing
const Stack = createNativeStackNavigator<RootStackParamList>();

// Define navigation types for better type safety
type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Navbar: undefined;
  TwoSum: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Home screen to navigate to other challenges
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // Use useCallback for navigation handlers
  const navigateToCalculator = useCallback(() => {
    navigation.navigate('Calculator');
  }, [navigation]);

  const navigateToNavbar = useCallback(() => {
    navigation.navigate('Navbar');
  }, [navigation]);

  const navigateToTwoSum = useCallback(() => {
    navigation.navigate('TwoSum');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7fa" />
      <Text style={styles.title}>Coding Assessment Challenges</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={navigateToCalculator}
        accessibilityLabel="Navigate to Calculator challenge"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Challenge 1: Calculator</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={navigateToNavbar}
        accessibilityLabel="Navigate to Navbar challenge"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Challenge 2: Navbar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={navigateToTwoSum}
        accessibilityLabel="Navigate to Two Sum challenge"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Challenge 3: Two Sum II</Text>
      </TouchableOpacity>
    </View>
  );
};

// App with navigation configuration
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Coding Assessment' }}
        />
        <Stack.Screen 
          name="Calculator" 
          component={Calculator} 
          options={{ title: 'Challenge 1: Calculator' }}
        />
        <Stack.Screen 
          name="Navbar" 
          component={Navbar} 
          options={{ title: 'Challenge 2: Navbar', headerShown: false }}
        />
        <Stack.Screen 
          name="TwoSum" 
          component={TwoSum} 
          options={{ title: 'Challenge 3: Two Sum II' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    // Minimum touch target size for accessibility
    minHeight: 44,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
