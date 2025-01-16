import { TextInputProps, TouchableOpacity } from 'react-native';
import { ErrorText, Input, InputContainer, InputLabel } from './styles'
import { Control, Controller, FieldError } from 'react-hook-form';
import { Fragment, useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

type InputComponentProps = TextInputProps & {
    label?: string;
    name: string;
    control: Control<any>;
    error?: FieldError
    type?: "password"
}

export default function InputComponent({ label, control, name, type, error, ...props }: InputComponentProps) {
    const [hidePassword, setHidePassword] = useState(true)
    const [isActive, setIsActive] = useState(false)

    const changeHidePassword = () => {
        setHidePassword(!hidePassword)
    }

    return (
        <Controller
            control={control}
            rules={{
                required: {
                    message: "Campo obrigatorio!",
                    value: true,
                },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
                <Fragment>
                    {!!label?.length && <InputLabel>{label}</InputLabel>}
                    <InputContainer
                        isActive={isActive}
                        hasError={!!error}
                    >
                        <Input
                            {...props}
                            onBlur={() => {
                                setIsActive(false)
                                onBlur()
                            }}
                            onFocus={() => setIsActive(true)}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={hidePassword}
                        />
                        {type === "password" && (
                            <TouchableOpacity onPress={changeHidePassword}>
                                <Feather name={hidePassword ? 'eye' : 'eye-off'} size={24} color="black" />
                            </TouchableOpacity>
                        )}
                    </InputContainer>
                    {!!error && (
                        <ErrorText>{error.message}</ErrorText>
                    )}
                </Fragment>
            )}
            name={name}
        />
    )
}