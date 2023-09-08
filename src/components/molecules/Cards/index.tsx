import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TransactionData} from '../../../config';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

interface CardsProps {
  transaction: TransactionData;
}

const Cards: React.FC<CardsProps> = ({transaction}) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.neutral.white,
          borderColor: colors.border.card,
        },
      ]}>
      <View style={styles.cardHeader}>
        <Text style={[styles.titleHeader, {color: colors.primary.main}]}>
          ID: {transaction.id}
        </Text>
        <Text style={[styles.status, {color: colors.text.descTitle}]}>
          {transaction.typeName}
        </Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          Product Name: {transaction.productName}
        </Text>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          Total: {transaction.total}
        </Text>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          Price: {transaction.price}
        </Text>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          User ID: {transaction.userId}
        </Text>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          User Name: {transaction.userName}
        </Text>
        <Text style={[styles.address, {color: colors.text.subTitle}]}>
          User Age: {transaction.userAge}
        </Text>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16, // Add margin to separate cards
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
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
});
