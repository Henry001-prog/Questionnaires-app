import React from 'react';

import { QuestsCard, Card, Image, CardTitleWrapper, CardTitle } from './styles';

const QuestCard = ({ quest, isFirstColumn, onNavigate }) => (
    <QuestsCard
        isFirstColumn={isFirstColumn}
        onPress={onNavigate}
    >
        <Card>
            <Image
                aspectRatio={1}
                    resizeMode="stretch"
            />
            <CardTitleWrapper>
                <CardTitle>{quest.title}</CardTitle>
            </CardTitleWrapper>
        </Card>
    </QuestsCard>
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
        borderWidth: 1,
        // Solução 2
        // margin: 10,
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: .8,
        width: '100%',
        paddingTop: 10,
        paddingRight: 3,
        paddingBottom: 10,
        paddingLeft: 3,
        alignItems: 'center',
    },
    cardTitle:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    },
});*/

export default QuestCard;