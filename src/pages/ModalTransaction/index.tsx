import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Gap, Inputs} from '../../components';
import {useForm, useTheme} from '../../helper';

const ModalTransaction = () => {
  const {colors} = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useForm({
    text: '',
  });

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.neutral.white}]}>
      <View>
        <Gap height={24} />
        <Inputs
          type="with-title"
          title="Masukkan Kata"
          placeholder="Masukkan Text anda"
          value={form.text}
          onChangeText={value => setForm('text', value)}
        />
        <Gap height={24} />
        <Button title="Submit" onPress={toggleModal} />
      </View>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          toggleModal();
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>
              {form.text !== '' ? form.text : 'Masukkan text terlebih dahulu'}
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Tutup Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});
