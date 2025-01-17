import { ScrollView, View, ViewStyle } from "react-native";
import React from "react";
import ViewComponent from "../View";
export type ScrollViewComponentProps = {
    children?: React.ReactNode
    ph?: number
    pb?: number
}

export default function ScrollViewComponent({ children, ph, pb }: ScrollViewComponentProps) {
    const styleScrollView: ViewStyle = {
        paddingHorizontal: 20
    }

    if (typeof ph === "number") {
        styleScrollView.paddingHorizontal = ph;
    }

    if (typeof pb === "number") {
        styleScrollView.paddingBottom = pb;
    }

    return (
        <ViewComponent>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styleScrollView}>
                {children}
            </ScrollView>
        </ViewComponent>
    )
}