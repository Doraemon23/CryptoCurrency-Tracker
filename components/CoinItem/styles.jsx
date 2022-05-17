import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    borderBottomColor: "#282828",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: "4%",
    paddingHorizontal: "2%",
  },
  mcr: {
    flexDirection: "row",
    paddingVertical: "2%",
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
    fontSize: 20,
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
    flex: 0.6,
    marginLeft: 10,
  },
  cp: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  pc: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  coin2: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
});

export default styles;
