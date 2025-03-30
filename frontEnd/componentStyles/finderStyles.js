import { StyleSheet } from "react-native";

const finderStyles = StyleSheet.create({
  containerPrincipal: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width:"75%",
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    padding: 30,
    borderColor: "#e0e0e0",
  },  
  input: {
    width: "100%",
    height: 50,
  },
  imageLupa: {
    marginRight: 7,
  },
  imageFilter: {
    width: 60,
    hight: 60,
    marginTop: 26,
  },
});

export default finderStyles;