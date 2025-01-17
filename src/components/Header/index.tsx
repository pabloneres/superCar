import { router } from "expo-router";
import {
    HeaderContainer,
    HeaderLogoutButton,
    HeaderNameText,
    HeaderWelcome,
} from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import ViewComponent from "../View";
import { Fragment } from "react";


type HeaderComponentProps = {
    title?: string;
}

export default function HeaderComponent({ title }: HeaderComponentProps) {

    const onBack = () => {
        router.back()
    }

    return (
        <HeaderContainer>
            <HeaderLogoutButton onPress={onBack}>
                <AntDesign name="back" size={24} color="black" />
            </HeaderLogoutButton>
            <HeaderWelcome>
                <HeaderNameText>{title}</HeaderNameText>
            </HeaderWelcome>
            <HeaderLogoutButton />
        </HeaderContainer>
    )
}