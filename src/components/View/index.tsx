import { ViewProps } from "react-native";
import { ViewContainer } from "./styles";

type ViewComponentProps = ViewProps & {
    mt?: number
    mb?: number
    ml?: number
    mr?: number
    flex?: number
}

export default function ViewComponent(props: ViewComponentProps) {
    return (
        <ViewContainer {...props} />
    )
}