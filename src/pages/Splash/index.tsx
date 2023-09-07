import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {SplashProps} from '../../config/Types';
import {useTheme} from '../../helper';
import {fonts} from '../../utils';

const Splash: React.FC<SplashProps> = ({navigation}) => {
  const {colors} = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.neutral.white}]}>
      <Image source={Logo} />
      <Text style={[styles.textTitle, {color: colors.text.title}]}>
        2023 © Rekosistem Tech Test
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    position: 'absolute',
    bottom: 24,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
  },
});
