import styled from "styled-components";
import { colors } from "../../styles/colors";
export const SectionView = styled.View`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    //background-color: ${colors.backgroundLight};
    background-color: ${({ theme })=> theme.colors.backgroundDark}; //${props => props.theme.colors.backgroundDark};
    width: 100%;
    height:100%;

`;
export const SectionImage = styled.Image`
    height: 150px;  
    width:150px;
`;

export const SectionText = styled.Text`
    color:white;
    font-size:24px;
    font-weight:bold;
`;