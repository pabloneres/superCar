import { Fragment } from "react";
import { ButtonContainer, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    title: string
}

export default function ButtonComponent({ title, ...props }: ButtonComponentProps) {
    return (
        <ButtonContainer {...props}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    )
}