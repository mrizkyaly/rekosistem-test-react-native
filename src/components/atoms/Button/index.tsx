import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: colors.primary.main,
          shadowColor: colors.primary.shadow,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.btnText, {color: colors.neutral.white}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 4,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
});
