import { Slot } from "expo-router"
import { Fragment } from "react"
import Toast from "react-native-toast-message"
import { AuthProvider } from "../context/authContext"

export default function RootLayout() {
    return (
        <Fragment>
            <AuthProvider>
                <Slot />
                <Toast />
            </AuthProvider>
        </Fragment>
    )
}
