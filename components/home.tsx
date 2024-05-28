import { View, Text, Image, ImageBackground, ScrollView, SafeAreaView, Pressable, TouchableOpacity, StyleSheet,Button } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Assets } from "../constants/image";
import { useNavigation } from "@react-navigation/native";



const foodArray = [
    {
        imageUrl:Assets.Bread,
        foodName: 'Niri Sushi',
        description: 'breakfast food',
        foodCategory: 'Breakfast',
        id:1

    },
    {
        imageUrl:Assets.Bread,
        foodName: 'Pizza',
        description: 'breakfast food',
        foodCategory: 'Lunch',
        id:2
    },
    {
        imageUrl:Assets.Bread,
        foodName: 'Badger',
        description: 'breakfast food',
        foodCategory: 'Dinner',
        id:3
    },
    {
        imageUrl:Assets.Bread,
        foodName: 'Badger',
        description: 'breakfast food',
        foodCategory: 'Snacks',
        id:4
    }
]

export const Home = () =>{
    const navifation = useNavigation()
    const handleClick = () =>{

    }
    
    return(
        <SafeAreaView style={styles.safeArea}>
         <View style={styles.header}>
                <View style={styles.icons}>
                    <Entypo name="menu" size={22} color="#ffffff"/>
                    <View style={styles.cartIcon}>
                        <AntDesign name="shoppingcart" size={22} color="#ffffff"/>
                        <Ionicons name="notifications-outline" size={22} color="#ffffff"/>
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
        <ScrollView style={styles.container}>
            <View style={styles.mainCard}>
                   
                    <View style={[styles.innerCard1, { flexDirection: 'row', flexWrap: 'wrap' ,justifyContent:'center'}]}>
                        {foodArray.map(food => (
                            <View key={food.id} style={styles.itemRow}>
                                <Image source={food.imageUrl} style={styles.image} />
                                <Text style={[styles.text,{color:'white'}]}>{food.foodCategory}</Text>
                            </View>
                        ))}
                    </View>
                    
                    {foodArray.map((food, index) => (
                    <TouchableOpacity key={index} >
                        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between',backgroundColor: '#FFFF', borderRadius: 20, marginVertical: 5,}}>
                            <View style={{backgroundColor: '#fff', padding:15,borderRadius:20}}>
                            <Image source={food.imageUrl} style={{width: 80, height: 80,}}/>
                            </View>
                            <View style={{flex: 1, padding:20,backgroundColor:'black', opacity:0.2, borderRadius:10, marginRight:10}}>
                                <Text>{food.foodName}</Text>
                                <Text>{food.description}</Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
              
                    </View>
                    </ScrollView>
                
                <View style={styles.header2}>
                <Entypo name='home' color='orange' size={20}/>
                <AntDesign name="search1" size={20} color="#ffffff"/>
                <AntDesign name="hearto" size={20} color="#ffffff"/>
                <Ionicons name="person-circle-outline" size={20} color="#ffffff"/>
                </View>
                
            

       
         
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:"black",
        // padding: 20,
        width:'auto',
        height:'auto',

    },
    mainCard: {
        borderRadius: 20,
        backgroundColor: 'black',
        top:20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    innerCard1: {
        borderRadius: 20,
        backgroundColor: 'green',
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    innerCard2: {
        borderRadius: 20,
        backgroundColor: 'light green',
        
        marginBottom: 20,
       
        // flexWrap: 'wrap',
    },
    title:{
        color:'white'

    },
    imageContainer: {
        flex:1,
        flexDirection: 'row',
        marginTop: 30,
    
        marginVertical: 10, 
        marginHorizontal: 5, 
      },
    itemRow: {
        // width: '25%',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 12,
        marginTop: 10,
    },
    cardContainer: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
 
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      icons: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
    },
    cartIcon: {
        flex:1,
        justifyContent:"flex-end",
        flexDirection: "row",
        alignItems: "center",
        gap:6,
        left:20
    },
    Image:{ 
        width: 'auto', 
        height: 250, 
        borderRadius:10 ,
        resizeMode: 'cover',
        opacity:0.5
    },
    backgroundImage:{
        marginTop:30,
        width:'100%',
    },
    
      buttonWrapper: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        right: 105,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000', 
        overflow: 'hidden',
        position: 'relative',
        backgroundColor:'#f5a142',
        marginBottom: 10,
      },
    part2:{
        backgroundColor: 'black',
        flex:1, 
        flexDirection: 'row', 
        
         borderRadius:20
        },
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
        header2: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            bottom:5, 
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
            opacity:0.7
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
    
})