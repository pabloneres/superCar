import {
    HeaderContainer,
    HeaderLogoutButton,
    HeaderNameText,
    HeaderWelcome,
    HeaderWelcomeText
} from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';


type HeaderHomeComponentProps = {
    name?: string;
    logout: () => void;
}

export default function HeaderHomeComponent({ name, logout }: HeaderHomeComponentProps) {
    return (
        <HeaderContainer>
            <HeaderWelcome>
                <HeaderWelcomeText>Olá, </HeaderWelcomeText>
                <HeaderNameText>{name}</HeaderNameText>
            </HeaderWelcome>
            <HeaderLogoutButton onPress={logout}>
                <AntDesign name="logout" size={24} color="black" />
            </HeaderLogoutButton>
        </HeaderContainer>
    )
}