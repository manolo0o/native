import { StyleSheet } from "react-native";

const finderStyles = StyleSheet.create({
  containerPrincipal: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: .8,
    borderColor: "#e0e0e0", 
  },
  containerInput: {
    height: 50,
    borderRadius: 5,
    borderWidth: .8,
    borderColor: "#e0e0e0",
  },  
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default finderStyles;