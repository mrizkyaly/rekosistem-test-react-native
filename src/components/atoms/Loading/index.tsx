import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

const Loading = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={colors.primary.main} />
      <Text style={[styles.text, {color: colors.primary.main}]}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'background: rgba(0, 0, 0, 0.08)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: fonts.primary[400],
    marginTop: 12,
  },
});
