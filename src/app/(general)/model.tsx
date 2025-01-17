import ViewScreenComponent from "../../components/ViewScreen";
import { useAuth } from "../../context/authContext";
import ViewComponent from "../../components/View";
import ListComponent from "../../components/List";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { getModels } from "../../services/carService";
import { useLocalSearchParams } from "expo-router";
import HeaderComponent from "../../components/Header";

interface IBrands {
    codigo: string;
    nome: string;
}

export default function Model() {
    const [data, setData] = useState<IBrands[]>([])
    const { code } = useLocalSearchParams();

    const fetchModels = async () => {
        try {
            const response = await getModels(String(code))

            setData(response.data.modelos)
        } catch (error: any) {
            Toast.show({
                position: "bottom",
                type: 'error',
                text1: error.message,
            })
        }
    }

    useEffect(() => {
        fetchModels()
    }, [])

    return (
        <ViewScreenComponent>
            <HeaderComponent
                title="Modelos"
            />
            <ViewComponent flex={1}>
                <ListComponent
                    data={data}
                />
            </ViewComponent>
        </ViewScreenComponent>
    )
}