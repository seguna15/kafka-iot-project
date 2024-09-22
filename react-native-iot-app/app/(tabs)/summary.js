import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { fetchDailySummary, fetchSensors } from "../(services)/api/api";
import DropDown from "../../component/DropDown";
import SummaryComponent from "../../component/SummaryComponent";

const Summary = () => {
  const [stats, setStats] = useState(null);
  const [sensors, setSensors] = useState({})
  const [sensor, setSensor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSensorsList  = async () => {
      const {sensors} = await fetchSensors();
      setSensors([...sensors]);
  }

  useEffect(() => {
    fetchSensorsList();
  },[])

  //handleSelect
  const handleSelect = async(item) => {
    setLoading(true);
    setSensor(item)
    const {dailySummary} = await fetchDailySummary(item);
    setLoading(false)
    setStats({...dailySummary?.[0]})

  } 

  console.log(stats)

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          style={{ opacity: 1 }}
          color="#8ac926"
        />
      ) : (
        <>
          <DropDown
            sensors={sensors}
            sensor={sensor}
            handleSelect={handleSelect}
          />
          <SummaryComponent sensor={sensor} stats={stats}/>
        </>
      )}
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  techList: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  techItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
  },
  techText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
