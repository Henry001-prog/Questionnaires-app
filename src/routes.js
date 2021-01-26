import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Questionnaire from './pages/Questionnaire';
import QuestList from './pages/QuestList';
import QuestAnswer from './pages/QuestAnswer';

const Routes = createStackNavigator({

    'Main': {
        screen: Questionnaire,
        navigationOptions: {
            title: 'Questionário',
            headerTitleAlign: 'center',
        }
    },

    'QuestList': {
        screen: QuestList,
        navigationOptions: {
            title: 'Questionários',
            headerTitleAlign: 'center',
            fontSize: 18,
        }
    },

    'QuestAnswer': {
        screen: QuestAnswer,
        navigationOptions: {
            title: 'Responder',
            headerTitleAlign: 'center',
        }
    },

}, {
    defaultNavigationOptions: {
        title: 'Bem-vindo!',
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            //borderBottomWidth: 1,
            //borderBottomColor: '#C5C5C5',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 26,
        },
    }
});

const AppContainer = createAppContainer(Routes);

export default AppContainer;
