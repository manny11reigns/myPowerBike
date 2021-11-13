import React from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { styles } from "../styles";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/landing-bike.jpg")}
          style={styles.image}
        />

        <View style={styles.textSection}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome to</Text>
          <Text
            style={{ textAlign: "center", fontSize: 32, fontWeight: "900" }}
          >
            Power Bike Shop.
          </Text>
        </View>

        <View style={styles.btnSection}>
          <Pressable
            style={styles.gmailButton}
            onPress={() => navigation.navigate("Cart")}
          >
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png",
              }}
              style={{ width: 20, height: 20 }}
            />

            <Text
              style={{
                color: "black",
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
              }}
            >
              Login With Gmail
            </Text>
          </Pressable>
          <Pressable
            style={styles.appleButton}
            onPress={() => navigation.navigate("Categories")}
          >
            <Image
              source={{
                uri: "https://banner2.cleanpng.com/20180614/vvg/kisspng-dell-logo-apple-computer-software-apple-inc-5b2310e30b9ca3.9969922215290247390476.jpg",
              }}
              style={{ width: 24, height: 24 }}
            />

            <Text
              style={{
                color: "white",
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 0.25,
              }}
            >
              Login With Apple
            </Text>
          </Pressable>
        </View>

        <View style={styles.signupText}>
          <Text style={styles.signupMessage}>Not a member? Sign up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
