import { Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/Button";
import InputComponent from "../../components/Input";
import ViewComponent from "../../components/View";
import { login } from "../../services/authService";
import Toast from "react-native-toast-message";
import ViewScreenComponent from "../../components/ViewScreen";
import ScrollViewComponent from "../../components/ScrollView";
import { useAuth } from "../../context/authContext";
import { router } from "expo-router";
import { useState } from "react";
import { ImageComponent, ImageContainerComponent } from "../../components/General";

const { width } = Dimensions.get("screen")

export default function Login() {
    const [isSending, setIsSending] = useState(false)
    const { signIn } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: '',
            password: ''
        }
    });

    const onSubmit = async (values: any) => {
        setIsSending(true)
        try {
            const response = await login(values)
            signIn(response.user)

            setIsSending(false)

            router.push("(general)/home")
        } catch (error: any) {
            setIsSending(false)
            Toast.show({
                position: "bottom",
                type: 'error',
                text1: error.message,
            })
        }
    }

    return (
        <ViewScreenComponent hasForm>
            <ScrollViewComponent>
                <ImageContainerComponent >
                    <ImageComponent resizeMode="contain" source={require("../../../assets/undraw_electric-car_vlgq.png")} />
                </ImageContainerComponent>

                <ViewComponent mb={20}>
                    <InputComponent
                        control={control}
                        name="user"
                        label="Usuário"
                        error={errors.user}
                        placeholder="Usuário"

                    />
                </ViewComponent>

                <ViewComponent mb={20}>
                    <InputComponent
                        control={control}
                        name="password"
                        label="Senha"
                        error={errors.password}
                        type="password"
                        placeholder="Senha"
                    />
                </ViewComponent>

                <ButtonComponent
                    loading={isSending}
                    onPress={handleSubmit(onSubmit)}
                    title="Entrar"
                />
            </ScrollViewComponent>
        </ViewScreenComponent>
    )
}