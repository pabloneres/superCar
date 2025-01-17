import { Redirect } from "expo-router";
import { Fragment } from "react";
import { Text } from "react-native";
import { useAuth } from "../context/authContext";

export default function Page() {
    const { user } = useAuth()

    return (
        <Redirect
            href={user?.token ? "(general)/home" : "(auth)/login"}
        />
    )
}