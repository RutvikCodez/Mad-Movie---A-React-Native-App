import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const SearchBar = ({ placeholder, onPress, ...props }: searchBarProps) => {
  return (
    <View
      className=" flex flex-row items-center bg-dark-200 rounded-full px-5 py-4 gap-2"
      {...props}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex text-white "
      />
    </View>
  );
};

export default SearchBar;
