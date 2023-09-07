import {
  faClipboard,
  faHome,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

interface TabItemProps {
  title?: string;
  active?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

const Icon = ({title, active}: {title: string; active: boolean}) => {
  const {colors} = useTheme();

  if (title === 'Beranda') {
    return (
      <FontAwesomeIcon
        icon={faHome}
        color={active ? colors.secondary.main : colors.neutral.gray}
        size={24}
      />
    );
  } else if (title === 'Pemesanan') {
    return (
      <FontAwesomeIcon
        icon={faClipboard}
        color={active ? colors.secondary.main : colors.neutral.gray}
        size={24}
      />
    );
  } else if (title === 'Profil') {
    return (
      <FontAwesomeIcon
        icon={faUserCircle}
        color={active ? colors.secondary.main : colors.neutral.gray}
        size={24}
      />
    );
  } else {
    return null;
  }
};

const TabItem: React.FC<TabItemProps> = ({
  title,
  active,
  onPress,
  onLongPress,
}) => {
  const {colors} = useTheme();

  const textStyles = [
    styles.tabText,
    {color: active ? colors.secondary.main : colors.neutral.gray},
  ];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon title={title ?? ''} active={active ?? false} />
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
});
