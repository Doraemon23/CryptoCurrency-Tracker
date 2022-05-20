import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useWatchlist } from '../../context/WatchlistContext'
import CoinItem from '../../components/CoinItem';
import { getWatchlistedCoins } from '../../services/requests';


const WatchList = () => {
  const { watchlistCoinIds } = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join('%2C');

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1, transformCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchlistedCoins();
  }, [watchlistCoinIds]);
  console.log("abc");
  return (
    <FlatList style={styles.cont2}
      data={coins}
      renderItem={({ item }) => <CoinItem coin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={fetchWatchlistedCoins}
        />
      }
    />
  )
};
const styles = StyleSheet.create({
  cont2: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },
});
export default WatchList;