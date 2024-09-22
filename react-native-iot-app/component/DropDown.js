import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import  {AntDesign} from "@expo/vector-icons"

const DropDown = ({sensors, handleSelect, sensor}) => {
  const [expanded, setExpanded] = useState(false);
 
  const toggleExpanded = useCallback(() => {setExpanded(!expanded)},[expanded])
  
  
  const onSelect = useCallback(async (item) => {
      await handleSelect(item);
      setExpanded(false);
  },[])


  
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={toggleExpanded}>
        <Text>Select Sensor</Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} />
      </TouchableOpacity>
      {expanded ? (
        <View style={styles.options}>
          <FlatList
            keyExtractor={(item) => item}
            data={sensors}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} style={styles.optionItem} onPress={() =>onSelect(item)}>
                <Text>{item.toUpperCase()}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
          />
        </View>
      ) : null}
    </View>
  );
}

export default DropDown

const styles = StyleSheet.create({
  options : {
    position: "absolute",
    top: 53,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    zIndex: 1,
    maxHeight: 350,
  },
  optionItem: {
    marginBottom: 20,
    height: 40,
    justifyContent: "center",
  },
  separator: {
    height: 4,
  },
  text: {
    fontSize: 16,
    opacity: 0.8,
  },
  button: {
    height: 50,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  }
})