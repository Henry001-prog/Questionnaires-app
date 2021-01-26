import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import FormRow from '../../components/FormRow';
import InputMap from '../../components/InputMap';

import firebase from '@firebase/app';
import '@firebase/database';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

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

export default function Questionnaire({ navigation }) {
    const [title, setTitle] = useState('');
    const [creatorAuthor, setCreatorAuthor] = useState('');
    const [user, setUser] = useState('');
    const [dateCreator, setDateCreator] = useState('');
    const [dateUser, setDateUser] = useState('');
    const [customFields, setCustomFields] = useState([]);
    const [nameError, setNameError] = useState('');
    const [nameError2, setNameError2] = useState('');
    const [nameError3, setNameError3] = useState('');
    const [nameError4, setNameError4] = useState('');
    const [nameError5, setNameError5] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [location, setLocation] = useState();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const [test, setTest] = useState({});
    const [questions, setQuestions] = useState([
        {...blankQuest}
    ]);
   

   /*function handleSubmit() {
        const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({
                title: title,
                creator: {creatorAuthor, user},
                date: {dateCreator, dateUser},
                customField: questions,
                latitude: text,
                longitude: text2
            });
            
            //setLatitude('');
            //setLongitude('');
            //navigation.navigate('QuestList', { title, creatorAuthor, user, dateCreator, dateUser, customFields });
            
    }*/

    function handleSubmit() {
        if (title.trim() === '') {
            setNameError(() => ('Necessário preencher o campo título.'));
        
        } else if(creatorAuthor.trim() === '') {
            setNameError2(() => ('Necessário preencher o campo autor.'));

        } else if(dateCreator.trim() === '') {
            setNameError3(() => ('Necessário preencher o campo data do formulário.'));
        }
        /*else if(questions.quests.trim() === '') {
            setNameError4(() => ('Necessário preencher o campo pergunta.'));
        }*/
        else {
            const db = firebase.database();
            db
            .ref(`/questionnaires/`)
            .push({
                title: title,
                creator: {creatorAuthor, user},
                date: {dateCreator, dateUser},
                customField: questions,
                latitude: text,
                longitude: text2
            });
            setNameError(() => (null));
            setNameError2(() => (null));
            setNameError3(() => (null));
            //setNameError4(() => (null));
            //setNameError5(() => (null));
            setTitle('');
            setCreatorAuthor('');
            setUser('');
            setDateCreator('');
            setDateUser('');
            //setCustomFields([]);
            setQuestions([]);
            navigation.navigate('QuestList', { title, creatorAuthor, user, dateCreator, dateUser, customFields });
        }
    }

    useEffect(() => {
        const firebaseConfig = {
            //Because they are private data, Firebase settings was removed
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
          //firebase.analytics();
    })

    

    useEffect(() => {
        (async () => { 
          if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
              'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
            );
            return;
          }
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);
    
      let text = 'Esperando...';
      let text2 = 'Esperando...';
      if (errorMsg) {
        text = errorMsg;
        text2 = errorMessage;
      } else if (location) {
        text = JSON.stringify(location.coords.latitude);
        text2 = JSON.stringify(location.coords.longitude);
      }

    function addCustomField() {
        setCustomFields([...customFields, {quest: 'value', answer: 'value'}]
        )
    }
    function addInput() {
        setQuestions([...questions, {...blankQuest}]);
    }
    
    const blankQuest = { quests: '', ans: '' };

    function OnCustomInputNameHandler(value, index, className) {
        const updatedQuest = [...questions];
        updatedQuest[index].quests = value;
        setQuestions(updatedQuest);
        setQuestion(updatedQuest)
        //console.log(questions)
    }

    function OnCustomInputKeyHandler(value, index, className) {
        const updatedQuest2 = [...questions];
        updatedQuest2[index].ans = value;
        setQuestions(updatedQuest2);
        //console.log(questions)
    }

    function remove() {
        setQuestions(questions.splice(0,questions.length-1))
    };

    function deleteDynamicField(index) {
        questions.splice(index, 1);
        setQuestions(questions);
    }

    return (
        
        <KeyboardAvoidingView style={{backgroundColor: 'white', flex: 1}} enabled>
                <StatusBar style="#6ca2f7" />
                <ScrollView contentContainerStyle={{ padding: 10 }}>
                        <FormRow first>
                            <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                placeholderTextColor= '#808080'
                                value={title} 
                                onChangeText={setTitle}
                                placeholder='Título'
                                multiline={true}
                            />
                            {!!nameError && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError}</Text>
                            )}
                        </FormRow>

                        <FormRow>
                            <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                placeholderTextColor= '#808080'
                                value={creatorAuthor} 
                                onChangeText={setCreatorAuthor}
                                placeholder='Autor'
                                multiline={true}
                            />
                            {!!nameError2 && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError2}</Text>
                            )}
                            <TextInput 
                                style={{marginBottom: 20}}
                                placeholderTextColor= '#808080'
                                value={user}
                                onChangeText={setUser}
                                placeholder='Usuário'
                                multiline={true}
                                defaultValue={(user ??{})}
                            />
                        </FormRow>

                        <FormRow>
                        <View>
                            <TextInput 
                                style={{marginBottom: 20, paddingTop: 10}}
                                placeholderTextColor= '#808080'
                                value={dateCreator} 
                                onChangeText={setDateCreator}
                                placeholder='Data de criação do formulário'
                                multiline={true}
                            />
                            {!!nameError3 && (
                                <Text style={{ color: 'red', textAlign: 'center', }}>{nameError3}</Text>
                            )}
                        </View>
                            <View>
                                <TextInput
                                    style={{marginBottom: 20}}
                                    placeholderTextColor= '#808080'
                                    value={dateUser}
                                    onChangeText={setDateUser}
                                    placeholder='Data das repostas'
                                    multiline={true}
                                />
                            </View>
                    </FormRow>

                    {
                        questions.map((customInput, key) => {

                            return(
                                <FormRow key={key}>
                                        <TextInput 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key} 
                                            onChangeText={(name, className) => {OnCustomInputNameHandler(name, key, className)}}
                                            placeholder='Pergunta'
                                            multiline={true}
                                            className='quest'
                                            dataIndex={key}
                                        />
                                        {/*!!nameError4 && (
                                            <Text style={{ color: 'red', textAlign: 'center', }}>{nameError4}</Text>
                                        )*/}
                                        <TextInput 
                                            style={{marginBottom: 20, paddingTop: 10}}
                                            placeholderTextColor= '#808080'
                                            value={customInput.key}
                                            onChangeText={(value, className) => {OnCustomInputKeyHandler(value, key, className)}}
                                            placeholder='Resposta'
                                            multiline={true}
                                            className='ans'
                                            dataIndex={key}
                                        />
                                    <ViewButton>
                                        <Button title='Delete' color="#FF0004" onPress={() => remove()} />
                                    </ViewButton>
                                </FormRow>
                            )
                        })
                    }
                    <ViewButton>
                        <Button
                            title='Criar Campo'
                            onPress={() => {addInput()}}
                        />
                    </ViewButton>

                    <FormRow>
                        
                        <Text>{`Latitude: ${text}`}</Text>
                        <Text>{`Longitude: ${text2}`}</Text>
                        
                    </FormRow>

                    <ViewButton>
                        <Button
                            title='Salvar'
                            onPress={() => {handleSubmit()}}
                        />
                    </ViewButton>
                        
                </ScrollView>
        </KeyboardAvoidingView>
    );
}

