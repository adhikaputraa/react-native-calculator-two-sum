# Coding Assessment Solutions

This project contains solutions for three coding challenges:

## Challenge 1: Calculator
A simple calculator that adds two numbers with a clean UI.

## Challenge 2: Navbar
A responsive navbar component that adapts to both desktop and mobile views.

## Challenge 3: Two Sum II
An implementation of the Two Sum II algorithm with an interactive UI for testing.

## How to Use This Project

1. **Installation**:
   ```
   cd /Users/putraa/Documents/assessment2/CalculatorApp
   npm install
   ```

2. **Running the App**:
   ```
   npm start
   ```
   Then scan the QR code with the Expo Go app on your mobile device, or press 'i' for iOS simulator or 'a' for Android emulator.

3. **Navigation**:
   - The app has a home screen with buttons to navigate to each challenge
   - You can navigate back using the header back button

## Project Structure

```
CalculatorApp/
├── App.tsx                  # Main app with navigation setup
├── README.md                # Project documentation
├── src/
│   └── screens/
│       ├── Calculator/      # Challenge 1 implementation
│       ├── Navbar/          # Challenge 2 implementation
│       └── TwoSum/          # Challenge 3 implementation
```

## Solution Details

1. **Calculator**:
   - Simple UI with two number inputs and an "Add" button
   - Displays the sum when the button is pressed

2. **Navbar**:
   - Responsive design with desktop and mobile views
   - Mobile view includes a hamburger menu toggle
   - Search input field included in both views

3. **Two Sum II**:
   - Implementation uses the two-pointer approach
   - O(n) time complexity and O(1) space complexity
   - Interactive UI to test different inputs and examples

## Tools and Technologies Used

- React Native with Expo
- TypeScript for type safety
- React Navigation for screen navigation

## GitHub Repository

This project has been initialized with Git and is ready for deployment to GitHub or any other Git repository.
