import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    borderBottomColor: "#282828",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  mcr: {
    flexDirection: "row",
  },
  rankc: {
    borderRadius: 8,
    paddingHorizontal: 5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  r: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  symbol: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  coin1: {
    marginLeft: 10,
  },
  cp: {
    color: "white",
    fontSize: 20,
  },
  pc: {
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
    color: "white",
    fontSize: 18,
  },
  coin2: {
    marginRight: 50,
  },
});

export default styles;
