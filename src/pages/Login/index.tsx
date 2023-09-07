import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Button, Gap, Inputs} from '../../components';
import {LoginProps} from '../../config/Types';
import {useForm, useTheme} from '../../helper';
import {fonts} from '../../utils';

const Login: React.FC<LoginProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  console.log('errortext', errortext);

  const handleSubmitLogin = () => {
    setErrortext('');
    if (!form.email) {
      console.log('Please fill Email');
      return;
    }
    if (!form.password) {
      console.log('Please fill Password');
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(user => {
        console.log(user);
        setTimeout(() => {
          setLoading(false);
          navigation.replace('MainApp');
        }, 2000);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        if (error.code === 'auth/invalid-email') {
          setErrortext(error.message);
        } else if (error.code === 'auth/user-not-found') {
          setErrortext('No User Found');
        } else {
          setErrortext('Please check your email id or password');
        }
      });
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.neutral.white}]}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary.main}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <>
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
        </>
      )}
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
