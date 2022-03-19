import styled from "styled-components/native";

export const ConteinerCarro = styled.SafeAreaView`
    display: flex;
    align-items: center;
    background-color: #520e5f
    flex-direction: column;
    margin-top: 40px;
`;
export const ImageLogo = styled.Image`
    width: 240px;
    height: 120px;
`;
export const ImageCarro = styled.Image`
    width: 140px;
    height: 120px;
`;
export const BtnSubmitForm = styled.TouchableOpacity`
    background-color: #ebb105;
    padding: 10px 20px
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin: 10px 0 20px 0;
`;

export const TxtSubmitForm = styled.Text`
    color: #fff;
    font-size: 22px;
`;
export const CardCarro = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    flex-direction: row;
    border: 1px solid #b3b305;
    border-radius: 12px;
    padding: 5px 10px;
    margin: 5px;
`;
export const CardCarro_p = styled.Text`
    font-size: 18px;
    color: #ebb105;
`;
export const InputForm = styled.TextInput`
    background-color: #fff;
    width: 90%;
    margin-bottom: 15px;
    color: #222;
    font-size: 18px;
    border-radius: 6px;
    padding: 10px;
`;