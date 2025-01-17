import ViewScreenComponent from "../../components/ViewScreen";
import { useAuth } from "../../context/authContext";
import ViewComponent from "../../components/View";
import ListComponent, { Item } from "../../components/List";
import HeaderHomeComponent from "../../components/HeaderHome";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getBrands } from "../../services/carService";
import { router } from "expo-router";

interface IBrands {
    codigo: string;
    nome: string;
}

export default function Home() {
    const { user, logout } = useAuth();
    const [data, setData] = useState<IBrands[]>([])

    const fetchBrands = async () => {

        try {
            const response = await getBrands()

            setData(response.data)
        } catch (error: any) {
            Toast.show({
                position: "bottom",
                type: 'error',
                text1: error.message,
            })
        }
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const onSelectBrand = (data: Item) => {
        router.push({
            pathname: "(general)/model",
            params: {
                code: data.codigo
            },
        })
    }

    return (
        <ViewScreenComponent>
            <HeaderHomeComponent
                name={user?.name}
                logout={logout}
            />
            <ViewComponent flex={1}>
                <ListComponent
                    onPress={onSelectBrand}
                    data={data}
                />
            </ViewComponent>
        </ViewScreenComponent>
    )
}