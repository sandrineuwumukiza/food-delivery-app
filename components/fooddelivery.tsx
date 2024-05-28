import { View, Text, Image, ImageBackground, ScrollView, SafeAreaView, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Assets } from "../constants/image";

interface Food {
    imageUrl: string;
    foodName: string;
    description: string;
    foodCategory: string;
    id: number;
}

const foodArray = [
    {
        imageUrl: Assets.Bread,
        foodName: 'Niri Sushi',
        description: 'breakfast food',
        foodCategory: 'Breakfast',
        id: 1
    },
    {
        imageUrl: Assets.Bread,
        foodName: 'Pizza',
        description: 'breakfast food',
        foodCategory: 'Breakfast',
        id: 2
    },
    {
        imageUrl: Assets.Bread,
        foodName: 'Badger',
        description: 'breakfast food',
        foodCategory: 'Breakfast',
        id: 3
    },
    {
        imageUrl: Assets.Bread,
        foodName: 'Badger',
        description: 'breakfast food',
        foodCategory: 'Breakfast',
        id: 4
    }
];

export const Food = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={styles.icons}>
                    <Entypo name="menu" size={24} color="#ffffff"/>
                    <View style={styles.cartIcon}>
                        <AntDesign name="shoppingcart" size={24} color="#ffffff"/>
                        <Ionicons name="notifications-outline" size={24} color="#ffffff"/>
                    </View>
                </View>
            </View>
            <View style={styles.banner}>
                <ImageBackground source={Assets.Vegetables} style={styles.imageBackground}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.discountText}>30% Discount</Text>
                        <Text style={styles.bannerText}>Get your first order</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.foodSection}>
                {foodArray.map((food, index) => (
                    <FoodCard key={index} food={food} />
                ))}
            </View>
            <View style={styles.popularDishes}>
                <Text style={styles.sectionTitle}>Popular Dishes</Text>
                <Text style={styles.viewAll}>View All</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {foodArray.map((food, index) => (
                    <FoodRow key={index} food={food} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

// Assuming FoodCard and FoodRow are defined elsewhere or here for demonstration
const FoodCard = ({ food }: { food: Food }) => (
    <View style={styles.card}>
        <Image source={food.imageUrl} style={styles.cardImage} />
        <Text style={styles.cardText}>{food.foodCategory}</Text>
    </View>
);

const FoodRow = ({ food }: { food: Food }) => (
    <View style={styles.row}>
        <Image source={food.imageUrl} style={styles.rowImage} />
        <View style={styles.rowInfo}>
            <Text style={styles.rowTitle}>{food.foodName}</Text>
            <Text style={styles.rowDescription}>{food.description}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#000",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    icons: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    cartIcon: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center",
    },
    banner: {
        marginTop: 20,
    },
    imageBackground: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    bannerContent: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 10,
        padding: 20,
    },
    discountText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    bannerText: {
        fontSize: 14,
        color: "#ffffff",
    },
    button: {
        backgroundColor: "#f5a142",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
    },
    foodSection: {
        padding: 20,
    },
    popularDishes: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    viewAll: {
        fontSize: 14,
        color: "#f5a142",
    },
    scrollContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
    },
    cardImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    cardText: {
        fontSize: 16,
        color: "#ffffff",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    rowImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 20,
    },
    rowInfo: {
        flex: 1,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    rowDescription: {
        fontSize: 14,
        color: "#666",
    },
});

export default Food;
