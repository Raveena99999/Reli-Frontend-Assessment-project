// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/index.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });





import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform } from "react-native";

export default function JournalScreen() {
  const [entry, setEntry] = useState("");
  const [savedEntries, setSavedEntries] = useState<string[]>([]);

  const saveEntry = () => {
    if (!entry.trim()) {
      Alert.alert("Error", "Please enter some text before saving.");
      return;
    }
    setSavedEntries([entry.trim(), ...savedEntries]);
    setEntry("");
    Alert.alert("Success", "Your journal entry has been saved.");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-gray-50 p-4"
    >
      <Text className="text-2xl font-bold mb-4 text-gray-900">My Journal</Text>

      <TextInput
        placeholder="Write your journal entry here..."
        value={entry}
        onChangeText={setEntry}
        multiline
        className="border border-gray-300 rounded-lg p-3 bg-white mb-4 text-gray-900 min-h-[100px]"
      />

      <Pressable
        onPress={saveEntry}
        className="bg-blue-600 py-3 rounded-lg mb-6"
      >
        <Text className="text-white text-center font-semibold">Save Entry</Text>
      </Pressable>

      <Text className="text-xl font-semibold mb-2 text-gray-800">Previous Entries</Text>
      <View className="flex-1">
        {savedEntries.length === 0 && (
          <Text className="text-gray-500">No entries yet.</Text>
        )}
        {savedEntries.map((e, i) => (
          <View
            key={i}
            className="bg-white rounded-lg p-3 mb-2 border border-gray-200"
          >
            <Text className="text-gray-900">{e}</Text>
          </View>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}
