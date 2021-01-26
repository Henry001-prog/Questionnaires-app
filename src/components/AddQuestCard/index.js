import React from 'react';
import add from '../../resources/imgs/add.png';
/*import {
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';*/

import { AddQuestsCard, Card, Image, Text, CardText } from './styles';

// import { Container } from './styles';

const AddQuestCard = ({ questionnaire, isFirstColumn, onNavigate }) => (
    <AddQuestsCard
        onPress={onNavigate}
        isFirstColumn={isFirstColumn}>
        <Card>
            <Image 
                source={add}
            />
            <CardText><Text>Criar questionário</Text></CardText>
            
        </Card>
        
    </AddQuestsCard>
);

/*const styles = StyleSheet.create({
    container: {
        // Solução 2
        // flex: .5,

        // Solução 1
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,

        //borderWidth: 1,
        //borderColor: 'red',
    },
    card: {
        //flex: 1,
        //borderWidth: 1,
        height: '97%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        // paddingBottom: 10
        // Solução 2
        // margin: 10,
    },
    image: {
        width: '50%',
        height: '50%',
        
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});*/

export default AddQuestCard;