import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

const Cards = ({type, ...props}) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.cardPemesanan,
        {
          backgroundColor: colors.neutral.white,
          borderColor: colors.border.card,
        },
      ]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.titleHedaer, {color: colors.primary.main}]}>
          dasd
        </Text>
        <Text style={[styles.status, {color: colors.text.descTitle}]}>
          asdasd
        </Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          asdasd
        </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={[styles.date, {color: colors.text.title}]}>asdasd</Text>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardPemesanan: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHedaer: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
  },
  cardBody: {
    paddingTop: 8,
    paddingBottom: 18,
  },
  address: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: fonts.primary[400],
  },
});
