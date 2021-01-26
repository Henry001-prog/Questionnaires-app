import React from "react";
import FormRow from '../../components/FormRow';

import { 
    TextInput, 
    ViewButton, 
    Button,
} from './styles';

export default function InputMap({ customInput, key }) {
  return (
    <FormRow key={key}>
        <View >
            <TextInput 
                style={{marginBottom: 20, paddingTop: 10}}
                value={customInput.key} 
                onChangeText={name => {OnCustomInputNameHandler(name, key)}}
                title='Pergunta'
            />
        </View>
        <View>
            <TextInput 
                style={{marginBottom: 20, paddingTop: 10}}
                placeholderTextColor= '#808080'
                value={customInput.key} 
                onChangeText={value => {OnCustomInputNameHandler(value, key)}}
                title='Resposta'
            />
        </View>
        <ViewButton>
            <Button title='Delete' color="#FF0004" onPress={() => deleteDynamicField(key)} />
        </ViewButton>
    </FormRow>
  );
}