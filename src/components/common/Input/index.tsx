import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../assets/theme/color';
interface Prop {
  onChangeText: (text: string) => void;
  value: string; // 这里的value是可以为空的，但是如果你传了一个undefined或者null进
  placeholder?: string; // 提示文字
  style?: StyleProp<any>; // 自定义样
  label?: string; // 标签名称
  icon?: JSX.Element; // 图标
  InputStyle?: StyleProp<TextInputProps>;
  iconPosition?: 'left' | 'right';
  error?: string;
}
export default function Input({
  onChangeText,
  value,
  placeholder,
  label,
  icon,
  style,
  InputStyle,
  iconPosition,
  error,
  ...prop
}: Prop) {

  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      return iconPosition === 'right' ? 'row-reverse' : 'row';
    }
    return 'row';
  };

  const getBorderColor = () =>{
    if(focused) return color.primary
    return error ? color.danger : color.gray
  }
  return (
    <View style={[styles.inputContainer]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          style,
          icon && {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
          {alignItems: icon ? 'center': 'stretch'},
        ]}>
        {icon && <>{icon}</>}

        <TextInput
          value={value}
          style={[styles.textInput, InputStyle]}
          onFocus={()=>{setFocused(true)}}
          onBlur={()=>{setFocused(false)}}
          placeholder={placeholder}
          onChangeText={onChangeText}
          {...prop}
        />
      </View>
      {error && <Text style={[styles.errorText]}> {error} </Text>}
    </View>
  );
}
