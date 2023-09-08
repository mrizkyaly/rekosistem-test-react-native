import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Cards} from '../../components';
import {useTheme} from '../../helper';
import {TransactionData} from '../../config';

const Transaction: React.FC = () => {
  const {colors} = useTheme();
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsQuerySnapshot = await firestore()
          .collection('Transactions')
          .get();
        const transactionData: TransactionData[] = [];

        for (const transactionDoc of transactionsQuerySnapshot.docs) {
          const transaction = transactionDoc.data() as TransactionData;
          const productId = transaction.productId;
          const userId = transaction.userId;

          const productQuerySnapshot = await firestore()
            .collection('Product')
            .where('id', '==', productId)
            .get();

          const priceQuerySnapshot = await firestore()
            .collection('Prices')
            .where('id', '==', productId)
            .get();

          const typesQuerySnapshot = await firestore()
            .collection('Types')
            .where('id', '==', productId)
            .get();

          const userQuerySnapshot = await firestore()
            .collection('Users')
            .where('id', '==', userId)
            .get();

          if (!productQuerySnapshot.empty) {
            const productDoc = productQuerySnapshot.docs[0];
            const productData = productDoc.data();

            const priceDoc = priceQuerySnapshot.docs[0];
            const priceData = priceDoc.data();

            const typesDoc = typesQuerySnapshot.docs[0];
            const typesData = typesDoc.data();

            const userDoc = userQuerySnapshot.docs[0];
            const userData = userDoc.data();

            transactionData.push({
              ...transaction,
              productName: productData?.name || 'Unknown',
              price: priceData?.points || 'Unknown',
              typeName: typesData?.name || 'Unknown',
              typeColor: typesData?.color || 'Unknown',
              userName: userData?.name || 'Unknown',
              userAge: userData?.age || 0,
            });
          } else {
            console.log(
              'Product or User not found for productId:',
              productId,
              'and userId:',
              userId,
            );
          }
        }

        setTransactions(transactionData);
      } catch (error) {
        console.error('Error fetching transactions: ', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.neutral.white}]}>
      {transactions.map(transaction => (
        <Cards key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
