import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const CustomAlert = ({ visible, onClose, message }) => {
    return (
        <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}
        >
        <View style={styles.overlay}>
            <View style={styles.alertContainer}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
}

export default CustomAlert;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    alertContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    message: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});