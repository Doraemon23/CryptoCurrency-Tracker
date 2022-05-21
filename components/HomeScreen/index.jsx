import React,{useEffect,useState} from 'react';
import { FlatList, StyleSheet, View,RefreshControl } from "react-native";
import CoinItem from "../CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <View style={styles.cont1}>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem coin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
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
export default HomeScreen;