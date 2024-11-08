import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'; // Assuming you already have a styles file

import ToggleSwitch from '../components/ToggleSwitch';


const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.menuContainer}>
      {/* Burger button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.burgerButton}>
        <Icon name="bars" size={24} color="#000" />
      </TouchableOpacity>

      {/* Dropdown menu */}
      {menuVisible && (
        <View style={styles.menuDropdown}>
          <Text style={styles.menuItem}>Profile</Text>
          <Text style={styles.menuItem}>Progress</Text>
          <Text style={styles.menuItem}>Logout</Text>

          {/* Language toggle */}
          <View style={styles.languageToggle}>
            <TouchableOpacity>
              <Text style={styles.languageButton}>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.languageButton}>ES</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Menu;
