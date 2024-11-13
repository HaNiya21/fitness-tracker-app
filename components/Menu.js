import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../app/styles'; // Assuming you already have a styles file
import { useNavigation } from '@react-navigation/native';
import '../assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import ToggleSwitch from '../components/ToggleSwitch';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation(); // Properly initialize the navigation object here

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage)
        .then(() => console.log("Language changed to:", newLanguage))
        .catch(err => console.log(err));
};

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleProfileClick = () => {
    setMenuVisible(false);
    navigation.navigate('Profile'); // Navigate to the Profile screen
  };
  
  const handleProgressClick = () => {
    setMenuVisible(false);
    navigation.navigate('Progress'); // Navigate to the Progress screen
  };

  const handleLogoutClick = () => {
    setMenuVisible(false);
    navigation.navigate('Login'); // Navigate to the Login screen (ensure this matches your screen name)
  };

  return (
    <View style={[styles.menuContainer, menuVisible ? styles.burgerButtonPressed : styles.burgerButtonUnpressed]}>
      {/* Burger button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.burgerButton}>
        <Icon name="bars" size={24} color="#000" />
      </TouchableOpacity>

      {/* Dropdown menu */}
      {menuVisible && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity onPress={handleProfileClick}>
            <Text style={[styles.menuItem, 
            {fontFamily: i18n.language === 'es' ? 'Trebuchet' : 'Koulen-Regular' },
            {fontSize: i18n.language === 'es' ? 25 : 30 },
            {fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
            {letterSpacing: i18n.language === 'es' ? -1.5 : 'auto'}]}>{t('Profile')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProgressClick}>
          <Text style={[styles.menuItem, 
            {fontFamily: i18n.language === 'es' ? 'Trebuchet' : 'Koulen-Regular' },
            {fontSize: i18n.language === 'es' ? 25 : 30 },
            {fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
            {marginVertical: i18n.language === 'es' ? 25 : 10 },
            {letterSpacing: i18n.language === 'es' ? -1.5 : 'auto'}]}>{t('Progress')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutClick}>
          <Text style={[styles.menuItem, 
            {fontFamily: i18n.language === 'es' ? 'Trebuchet' : 'Koulen-Regular' },
            {fontSize: i18n.language === 'es' ? 25 : 30 },
            {fontWeight: i18n.language === 'es' ? 'bold' : 'regular' },
            {letterSpacing: i18n.language === 'es' ? -1.5 : 'auto'}]}>{t('Logout')}</Text>
          </TouchableOpacity>
          <ToggleSwitch style={{ marginBottom: 300 }} onPress={changeLanguage} />
        </View>
      )}
    </View>
  );
};

export default Menu;
