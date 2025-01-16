import { Fragment } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/Button";
import InputComponent from "../../components/Input";
import ViewComponent from "../../components/View";

const { width } = Dimensions.get("screen")

export default function Login() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: '',
            password: ''
        }
    });


    const onSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <Fragment>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="contain" source={require("../../../assets/undraw_electric-car_vlgq.png")} />
            </View>

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
                onPress={handleSubmit(onSubmit)}
                title="Entrar"
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width,
        height: 300
    },
    image: {
        width: "100%",
        height: "100%",
        padding: 20
    }
})