import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const AddQuestsCard = styled.TouchableOpacity`
    width: 50%;
    padding: ${props => (props.isFirstColumn ? '5px 5px 5px 10px' : '5px 10px 5px 5px')};
    height: ${Dimensions.get('window').width / 2}px;
`;

export const Card = styled.View`
    height: 97%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardText = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
`;

export const Image = styled.Image`
    width: 45%;
    height: 45%;
`;

export const Text = styled.Text`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 17px;
`;