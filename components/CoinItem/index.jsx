import react from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styles from "./styles";

export default function CoinItem({ coin }) {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap_change_percentage_24h,
    market_cap_rank,
  } = coin;
  const c = market_cap_change_percentage_24h < 0 ? "red" : "green";

  return (
    <View style={styles.cont}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 40,
          height: 40,
          marginLeft: 15,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={styles.coin1}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.mcr}>
            <View style={styles.rankc}>
              <Text style={styles.r}>{market_cap_rank}</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.coin2}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              width: "80%",
            }}
          >
            <Text style={styles.cp}>$ {current_price}</Text>
          </View>
          <View
            style={{
              backgroundColor: c,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "45%",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                ...styles.pc,
              }}
            >
              {market_cap_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
