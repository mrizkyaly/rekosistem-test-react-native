// BottomNavigatorDriver.tsx
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../../helper';
import {TabItem} from '../../atoms';

interface BottomNavigatorProps extends BottomTabBarProps {}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.neutral.white,
          borderTopColor: colors.border.bottomNav,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options?.tabBarLabel ?? options?.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
});

export default BottomNavigator;
