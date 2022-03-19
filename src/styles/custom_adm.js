import styled from "styled-components/native";

export const ConteinerCarro = styled.SafeAreaView`
    display: flex;
    align-items: center;
    background-color: #520e5f
    flex-direction: column;
    height: 840px;
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
export const CardCarro = styled.View`
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





export const ContainerLogin = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #161616;
`;

export const Logo = styled.View`
    padding-bottom: 20px;
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

export const LinkNewUser = styled.Text`
    color: #fff;
    margin-top: 10px;
    font-size: 18px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;