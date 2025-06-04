
import { View, Text, Switch } from "react-native";
import { useState } from "react";

export default function TabTwoScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <Text className="text-2xl font-bold mb-6 text-gray-900">Settings</Text>

      <View className="flex-row justify-between items-center py-4 border-b border-gray-300">
        <Text className="text-lg text-gray-800">Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? "#2563eb" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#a5b4fc" }}
        />
      </View>

      <Text className="mt-6 text-gray-600">
        This is just a demo setting switch. You can expand this screen with
        more options.
      </Text>
    </View>
  );
}





