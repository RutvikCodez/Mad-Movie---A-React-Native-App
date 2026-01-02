import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { images } from "@/constants/images";

const TabIcon = ({ focused, icon, title, ...props }: TabIconProps) => {
  if (focused)
    return (
      <ImageBackground
        source={images.highlight}
        className="flex w-full flex-1 flex-row min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        {...props}
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

export default TabIcon;
