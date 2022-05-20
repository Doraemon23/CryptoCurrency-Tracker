import React from 'react';
import { FlatList, StyleSheet, View, Text } from "react-native";
import CoinItem from "../CoinItem";
import cryptocurrencies from "../../assets/data/cryptocurrencies.json";

export default function HomeScreen(){
    return(
        <View style={styles.cont1}>
            <FlatList
          data={cryptocurrencies}
          renderItem={({ item }) => <CoinItem coin={item} />}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    cont1: {
      flex: 1,
      backgroundColor: "black",
      paddingTop: 50,
    },
  });