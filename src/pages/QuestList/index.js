import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import { ViewIndicator, ActivityIndicator, ViewList, FlatList, ViewTop, ViewBottom } from './styles';
import QuestCard from '../../components/QuestCard';
import AddQuestCard from '../../components/AddQuestCard';

import firebase from '@firebase/app';
import '@firebase/database';

export default function QuestList({ navigation }) {
    const title = navigation.getParam('title');
    //const [creatorAuthor, setCreatorAuthor] = useState('');
    //const [user, setUser] = useState('');
    //const [dateCreator, setDateCreator] = useState('');
    //const [dateUser, setDateUser] = useState('');
   // const [customFields, setCustomFields] = useState([{}]);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState({
      questions: []
    });
    const [active, setActive] = useState(false);

    useEffect(() => {
          const db = firebase.database();
          db.ref('/questionnaires/')
            .on('value', snapshot => {
              
              //const response = snapshot.val();
              //console.log('value', snapshot.val());
              const response = snapshot.val();
              //console.log(response);
              const keys = Object.keys(response);
              const questWithKeys = keys.map(id => {
              return { ...response[id], id }
              });
              setData(questWithKeys);
              const values = Object.values(response);

              const questions = values.filter(data2 => data2.customField)
                                      .map((res) => res.customField)
                                      .flat(Infinity);

              setData2({ ...data2, questions: [...questions] });
              //console.log(questWithKeys); 
              //return { data: questWithKeys };
                  
            
            });
        
      }, []);
    

    const isEven = number => number % 2 === 0;

    return (
        <ViewList>
          
             {/*data2.questions.map((q) => (
               <Text>{q.id} - {q.quests} - {q.ans}{""}</Text>
             ))*/}
          
            <FlatList
                    data={[...data, { isLast: true }]}
                    renderItem={({ item, index }) => (
                        item.isLast
                            ? <AddQuestCard
                                isFirstColumn={isEven(index)}
                                onNavigate={() => navigation.navigate('Main')} />
                            : item.creator.user == ''
                            ? <QuestCard 
                                    quest={item}
                                    isFirstColumn={isEven(index)}
                                    onNavigate={() => navigation.navigate('QuestAnswer', { dataItem: item, ...data2 })}
                                />
                            : null        
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={props => (<ViewTop/>)}
                    ListFooterComponent={props => (<ViewBottom/>)}
            />
          </ViewList>
    );
}