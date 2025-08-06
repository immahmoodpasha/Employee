import { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { orderStatusContext } from "../context/orderStatusContext";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "../components/CheckBox";
import apiClient from "../apiClient";

const CurrentTask = ({ route }) => {
  const { order } = route.params;
  const { toggleOccupied } = useContext(orderStatusContext);
  const navigation = useNavigation();
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    setCheckedItems(new Array(order.items.length).fill(false));
  }, [order]);

  const handleCheck = (index) => {
    const updatedChecks = [...checkedItems];
    updatedChecks[index] = !updatedChecks[index];
    setCheckedItems(updatedChecks);
  };

  const allChecked = checkedItems.every(Boolean); // true if all items are checked

  const CompletedOrder = () => {
    Alert.alert(
      "Are you sure?",
      "Do you want to mark this order as completed?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await apiClient.put(`/api/taskhistory`, { orderId: order.orderId });
              toggleOccupied();
              navigation.goBack();
            } catch (error) {
              console.error("Error deleting order:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Your Task</Text>
      <View style={styles.orderInfo}>
        <Text style={styles.orderId}>Order ID: #{(order.orderId).slice(0,7)}</Text>
        <FlatList
          data={order.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.productCard}>
              <View style={{ width: "80%" }}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productQty}>Qty: {item.quantity}</Text>
              </View>
              <CheckBox checked={checkedItems[index]} onToggle={() => handleCheck(index)} />
            </View>
          )}
        />

        {allChecked && (
          <TouchableOpacity onPress={CompletedOrder} style={styles.completeButton}>
            <Text style={styles.buttonText}>Mark Completed</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CurrentTask;

// ...styles remain the same


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#f9f5ff",
  },
  title: {
    color: "#8404ae",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
  },
  orderInfo: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderId: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2ebff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#5a189a",
  },
  productQty: {
    fontSize: 16,
    color: "#6c6c6c",
    marginTop: 4,
  },
  completeButton: {
    backgroundColor: "#8404ae",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
