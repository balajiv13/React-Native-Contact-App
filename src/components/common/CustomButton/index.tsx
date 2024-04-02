import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import color from '../../../assets/theme/color';
interface Prop {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<Button>;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
  gray?: boolean;
  white?: boolean,
  dark?: boolean,
}

const styles = StyleSheet.create({
  inputContainer: {},
  title: {},
});
const CustomButton = ({title, disabled, loading, style,primary, secondary, danger, success, gray, white, dark, ...prop}: Prop) => {
  const [focused, setFocused] = React.useState(false);

  const getBackgroundColor = () =>{
    if(disabled) return  color.gray;
    if(primary) return  color.primary;
    if(secondary) return  color.secondary;
    if(danger) return  color.danger;
    if(success) return  color.success;
    if(white) return  color.white;
    if(dark) return  color.dark;
  }

  return (
    <TouchableOpacity style={[styles.inputContainer, {backgroundColor: getBackgroundColor()}]} disabled={disabled} >
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
