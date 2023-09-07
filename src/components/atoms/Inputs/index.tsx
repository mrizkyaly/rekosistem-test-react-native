import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../../../helper';
import {fonts} from '../../../utils';

interface InputsProps {
  type: 'no-title' | 'with-title';
  title?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
  defaultValue?: string;
  onPressIn?: () => void;
}

const Inputs: React.FC<InputsProps> = ({
  type,
  title,
  placeholder,
  secureTextEntry,
  value,
  defaultValue,
  onChangeText,
  onPressIn,
}) => {
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      {type === 'no-title' ? (
        <></>
      ) : (
        <Text style={[styles.titleInput, {color: colors.text.title}]}>
          {title}
        </Text>
      )}

      <View style={[styles.inputContainer, {borderColor: colors.border.main}]}>
        <TextInput
          onPressIn={onPressIn}
          style={[styles.input, {color: colors.text.title}]}
          placeholder={placeholder}
          placeholderTextColor={colors.inputs.placeholder}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          value={value}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIconContainer}>
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              size={20}
              color="#9E9E9E"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.primary[600],
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
  },
  input: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  eyeIconContainer: {
    padding: 12,
  },
});
