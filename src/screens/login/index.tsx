import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [value, setValue] = React.useState(''); //para guardar el valor del input y la función que se ejecuta cuando cambia
  const [passowrd, setPassword]  = React.useState('')
  return (
    <Container>
      {value && <Text>Welcome {value}</Text>}
      <Input
        label="Username"
        placeholder="Username"
        value={value}
        onChangeText={setValue}
        // error="Field is required"
      />
      <Input
        label="Password"
        iconPosition="right"
        placeholder="password"
        value={passowrd}
        onChangeText={setPassword}
        icon={<Text>{'Hide'}</Text>}
      />

      <CustomButton secondary title={'Submit'} />
    </Container>
  );
};
export default Login;
