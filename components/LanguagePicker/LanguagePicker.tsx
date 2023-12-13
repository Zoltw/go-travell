import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import i18n from '../../localization/i18n';
import { styles } from './styles';
import { LanguagesAll } from '../../localization/languages';

export const LanguagePicker: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  }, []);

  return (
    <View style={styles.container}>
      {LanguagesAll.map((language, index) => (
        <TouchableOpacity
          key={index}
          style={styles.languageItem}
          onPress={() => handleLanguageChange(language.ISO2)}
        >
          <Text style={selectedLanguage === language.ISO2 ? styles.selectedText : styles.text}>
            {language.fullName}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

