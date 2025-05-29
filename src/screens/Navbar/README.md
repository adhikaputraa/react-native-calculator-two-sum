# Coding Challenge 2: Navbar

## Requirements
- Create a responsive navbar that works on both desktop and mobile views
- Use `<a>` tags with href="/" for navigation links
- Create a search input field
- Implement a hamburger menu for mobile that opens/closes when clicked

## Implementation
The Navbar component is implemented as a React Native component that:
1. Detects screen size to determine if in mobile or desktop mode
2. Shows a horizontal menu in desktop mode
3. Shows a hamburger icon in mobile mode
4. Toggles a vertical menu when the hamburger icon is clicked
5. Includes a search input field on both views
6. **Uses `<a>` tags with href="/" for navigation links when running on web**
7. **Falls back to TouchableOpacity for native mobile platforms**

## Code Structure
- `Navbar.tsx`: Main component with all functionality
- Uses React hooks (useState) for menu open/close state
- Uses Dimensions API to detect screen size
- Uses Expo vector icons for the hamburger menu and close icons
- **Uses Platform.OS to conditionally render `<a>` tags on web and TouchableOpacity on native**
- **Implements a LinkComponent that ensures proper navigation behavior across platforms**

## Testing
You can test by:
1. Viewing the navbar in wide screen mode (desktop)
2. Resizing to narrow screen (mobile)
3. Clicking the hamburger icon to open/close the menu
4. Testing the search input field
