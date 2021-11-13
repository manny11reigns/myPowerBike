import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { bicycles } from "../data/data";

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={bicycles}
        keyExtractor={(item) => item.price}
        renderItem={({ item }) => {
          return (
            <View>
              <View>
                <Image source={item.image} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoriesScreen;
