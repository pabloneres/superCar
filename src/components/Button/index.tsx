import { Fragment } from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    title: string
    loading?: boolean
}

export default function ButtonComponent({ title, loading, ...props }: ButtonComponentProps) {
    return (
        <ButtonContainer {...props}>
            {loading && (<ActivityIndicator color="#fff" />)}
            {!loading && <ButtonText>{title}</ButtonText>}
        </ButtonContainer>
    )
}