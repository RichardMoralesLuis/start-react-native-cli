import React, { FC, useState } from 'react';
import { TextInput } from 'react-native';


export const Input: FC = () => {

  const [value, setValue] = useState<string>();

  const handleChange = (value: string) => setValue(value);

  return <TextInput placeholder="Pon lo que quieras" value={value} onChangeText={handleChange}/>;
};
