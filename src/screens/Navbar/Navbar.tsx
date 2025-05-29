import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Add TypeScript interfaces for better type safety
interface LinkProps {
  href: string;
  style?: any;
  children: React.ReactNode;
  onPress?: () => void;
}

interface MenuItem {
  text: string;
  href: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const { width } = useWindowDimensions(); // Better responsive design

  // Use useCallback to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  // Use useMemo for expensive calculations
  const menuItems: MenuItem[] = useMemo(() => [
    { text: 'Showcase', href: '/' },
    { text: 'Docs', href: '/' },
    { text: 'Blog', href: '/' },
    { text: 'Analytics', href: '/' },
    { text: 'Templates', href: '/' },
    { text: 'Enterprise', href: '/' }
  ], []);

  // Use useMemo for responsive breakpoint
  const isMobileView = useMemo(() => width < 768, [width]);

  // Create a properly typed link component that works on both web and native
  const LinkComponent: React.FC<LinkProps> = ({ href, style, children, onPress, ...props }) => {
    if (Platform.OS === 'web') {
      return (
        <a href={href} style={{ textDecoration: 'none', ...style }} {...props}>
          {children}
        </a>
      );
    }
    return (
      <TouchableOpacity style={style} onPress={onPress} {...props}>
        {children}
      </TouchableOpacity>
    );
  };

  // Use useCallback for render functions to prevent unnecessary re-renders
  const renderMobileMenu = useCallback(() => {
    if (!isMenuOpen) return null;

    return (
      <View style={styles.mobileMenu}>
        {menuItems.map((item, index) => (
          <LinkComponent key={index} href={item.href} style={styles.mobileMenuItem}>
            <Text style={styles.mobileMenuItemText}>{item.text}</Text>
          </LinkComponent>
        ))}
      </View>
    );
  }, [isMenuOpen, menuItems]);

  const renderDesktopMenu = useCallback(() => {
    return (
      <View style={styles.desktopMenuItems}>
        {menuItems.map((item, index) => (
          <LinkComponent key={index} href={item.href} style={styles.desktopMenuItem}>
            <Text style={styles.desktopMenuItemText}>{item.text}</Text>
          </LinkComponent>
        ))}
      </View>
    );
  }, [menuItems]);

  return (
    <>
      <View style={styles.navbar}>
        <LinkComponent href="/">
          <Text style={styles.logo}>AEON</Text>
        </LinkComponent>

        {!isMobileView && renderDesktopMenu()}

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search documentation..."
            value={searchText}
            onChangeText={handleSearchChange}
            accessibilityLabel="Search documentation"
          />
          {isMobileView && (
            <TouchableOpacity 
              style={styles.menuIconContainer} 
              onPress={toggleMenu}
              accessibilityLabel={isMenuOpen ? "Close menu" : "Open menu"}
              accessibilityRole="button"
            >
              {isMenuOpen ? (
                <Ionicons name="close" size={24} color="black" />
              ) : (
                <Ionicons name="menu" size={24} color="black" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>

      {isMobileView && renderMobileMenu()}
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth, // Better cross-platform border
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    width: '100%',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0074D9',
  },
  desktopMenuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 20,
  },
  desktopMenuItem: {
    marginRight: 15,
  },
  desktopMenuItemText: {
    fontSize: 14,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: 36,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    width: 200,
  },
  menuIconContainer: {
    marginLeft: 15,
    padding: 5,
    // Add minimum touch target size for accessibility
    minWidth: 44,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileMenu: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
    // Better cross-platform shadows
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  mobileMenuItem: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f5f5f5',
    // Add minimum touch target size
    minHeight: 44,
    justifyContent: 'center',
  },
  mobileMenuItemText: {
    fontSize: 16,
  },
});

export default Navbar;
