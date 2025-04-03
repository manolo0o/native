import { StyleSheet } from "react-native";

const productScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    imageContainer: {
      marginTop: 45,
      width: "90%",
      height: 250,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 15,
    },
    textContainer:{ 
      width: "90%",
      marginTop: 20,
      padding: 10,
      borderRadius: 15,
      backgroundColor: "#f8f8f8",
    },
});

export default productScreenStyles; 