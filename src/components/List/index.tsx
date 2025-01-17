import React from "react";
import { FlatList } from "react-native";
import { ListContainer, ItemText, ListItem } from "./styles";

export interface Item {
    codigo: string;
    nome: string;
}

interface ListComponentProps {
    data: Item[];
    onPress?: (value: any) => any;
}

export default function ListComponent({ data, onPress }: ListComponentProps) {

    const onSelect = (value: Item) => {
        onPress && onPress(value);
    }

    return (
        <ListContainer>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.codigo}
                renderItem={({ item }) => (
                    <ListItem onPress={() => onSelect(item)}>
                        <ItemText>{item.nome}</ItemText>
                    </ListItem>
                )}
            />
        </ListContainer>
    );
};