import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Button, Gap, Inputs} from '../../components';
import {LoginProps} from '../../config/Types';
import {useForm, useTheme} from '../../helper';
import {fonts} from '../../utils';

const Login: React.FC<LoginProps> = ({navigation}) => {
  const {colors} = useTheme();

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const handleSubmitLogin = () => {
    navigation.replace('MainApp');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.neutral.white}]}>
      <Image source={Logo} />
      <Gap height={48} />
      <View>
        <Text style={[styles.textTitle, {color: colors.text.title}]}>
          Login Sekarang
        </Text>
        <Gap height={24} />
        <Inputs
          type="with-title"
          title="email"
          placeholder="Masukkan Email anda"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={12} />
        <Inputs
          type="with-title"
          title="Password"
          placeholder="Masukkan password anda"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
      </View>
      <Gap height={48} />
      <Button title="Login Sekarang" onPress={handleSubmitLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
  },
  logoImg: {
    width: '100%',
  },
});
