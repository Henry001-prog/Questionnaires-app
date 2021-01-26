import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { 
    KeyboardAvoidingView, 
    ScrollView, 
    TextInput, 
    ViewButton, 
    Button, 
    ButtonClean, 
    Loading, 
    Text 
} from './styles';

import { StatusBar } from 'expo-status-bar';
import FormRow from "../../components/FormRow";

import firebase from "@firebase/app";
import "@firebase/database";

export default function QuestList({ navigation }) {
    const [data, setData] = useState(navigation.getParam('dataItem'));
    const [nameError, setNameError] = useState('');

    console.log(data)

    const dataOther = navigation.getParam('dataItem');


    function handleUpdate() {
        const db = firebase.database();
        db
        .ref(`/questionnaires/${data.id}`)
        .set(data);
        //setData('');
        //navigation.navigate('QuestList');
    }

    function error() {
        if (data.creator.user.trim() === '') {
            setNameError(() => ('Necessário preencher o campo usuário.'));
        } else {
            setNameError(() => (null));
            navigation.navigate('QuestList');
        }
    }
    
  return (
    <KeyboardAvoidingView style={{backgroundColor: 'white', flex: 1}} enabled>
                <StatusBar style="#6ca2f7" />
                <ScrollView contentContainerStyle={{ padding: 10 }}>
                        <FormRow first>
                            <Text>{data.title}</Text>
                        </FormRow>

                        <FormRow>
                            <Text>{data.creator.creatorAuthor}</Text>
                            <TextInput 
                                style={{marginBottom: 20}}
                                placeholderTextColor= '#808080'
                                value={data.creator.user}
                                onChangeText={value => setData({ ...data, creator: {...data.creator, user: value} })}
                                placeholder='Usuário'
                                multiline={true}
                            />
                            {!!nameError && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                            )}
                        </FormRow>

                        <FormRow>
                            <Text>{data.date.dateCreator}</Text>
                                <TextInput
                                    style={{marginBottom: 20}}
                                    placeholderTextColor= '#808080'
                                    value={data.date.dateUser}
                                    onChangeText={value => setData({ ...data, date: {...data.date, dateUser: value} })}
                                    placeholder='Data das repostas'
                                    
                                />
                    </FormRow>

                    {
                        data.customField.map((q, id) => (
                            <FormRow key={id}>
                                <Text>{q.quests}</Text>
                                <TextInput
                                    style={{marginBottom: 20}}
                                    placeholderTextColor= '#808080'
                                    value={q.ans}
                                    onChangeText={value => { 
                                        const updated = [...data.customField]; updated[id].ans = value; 
                                        setData({ ...data, customField: updated }); }
                                    }
                                    placeholder='Resposta'
                                    multiline={true}
                                    
                                />
                            </FormRow>
                            

                        ))
                    }

                    <FormRow>
                        <Text>{data.latitude}</Text>
                        <Text>{data.longitude}</Text>
                    </FormRow>

                    <ViewButton>
                        <Button
                            title='Salvar'
                            onPress={() => {handleUpdate(); error()}}
                        />
                    </ViewButton>
                        
                </ScrollView>
        </KeyboardAvoidingView>
  );
}