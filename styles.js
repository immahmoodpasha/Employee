import { StyleSheet, Dimensions } from "react-native"

const {width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
    ProductCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth*0.30,
        height: 'auto',
        padding: '1%',
        marginBottom:5,
    },
    ImageContainer: {
        position: 'relative',
        aspectRatio: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        borderRadius: 8
    },
    AddButton: {
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        backgroundColor: 'white',
        paddingVertical: '7%',
        paddingHorizontal: '18%',
        borderRadius: 15,
        borderColor: '#8404ae',
        borderWidth: 2,
        boxShadow: '1px 1px 1px rgb(123, 121, 124)',
    },
    ProductDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        paddingHorizontal: '10%'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    Dashboard:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '5%',
        flex: 1
    },
    Header: {
        backgroundColor: '#8404ae',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: "9%",
        paddingBottom:"4%",
        paddingHorizontal: 16,
        alignItems: 'center',
        borderRadius:10,
        marginBottom: 12, // or remove if you want flush layout
},
    AdsCarousel:{
        borderRadius: 20,
        alignItems: 'center'
    },
    carouselItemContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselImage: {
        width: '100%',
        height: '100%'
    },
    CategorySection:{
        marginVertical: '2%'
    },
    CategoryTitle: {
        backgroundColor: '#8404ae',
        borderRadius: 20,
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        alignSelf: 'flex-start',
        marginTop: '4%'
    },
    CategoryList: {
        paddingVertical: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }
})