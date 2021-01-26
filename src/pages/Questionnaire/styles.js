import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const ScrollView = styled.ScrollView`
    background-color: #595959;
`;

export const TextInput = styled.TextInput`
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    width: 300px;
    border-width: 2px;
    border-color: transparent;
    border-bottom-color: gray;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 3px;
    border-color: transparent;
    border-bottom-color: #999999;
    color: white;
    font-size: 17px;
    text-align: center;
`;

export const ViewButton = styled.View`
    padding: 10px;
`;

export const Button = styled.Button`
   align-self: stretch;
   justify-content: center;
   align-items: center;
`;

export const ButtonClean = styled(Button)``;

export const Loading = styled.ActivityIndicator``;

export const Text = styled.Text`
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
`;