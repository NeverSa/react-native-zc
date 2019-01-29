import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: 65,
                color: "#333333",
                fontWeight: "bold",
                fontSize: 17,
                textAlignVertical: "center"
              }}
            >
              1月28
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#666666",
                textAlignVertical: "center"
              }}
            >
              星期-
            </Text>
          </View>
          <View style={{ paddingTop: 5 }}>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/message.png"
              }}
              style={{ height: 18, width: 19 }}
            />
          </View>
        </View>

        <View style={styles.topcontant}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
              89,568.00
            </Text>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/money-jian.png"
              }}
              style={{ height: 8, width: 14, marginLeft: 10 }}
            />
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image
                source={{
                  uri:
                    "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/eye-icon.png"
                }}
                style={{ height: 14, width: 14 }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.1)",
              paddingTop: 15,
              paddingBottom: 15
            }}
          >
            <Text style={{ color: "#fff", fontSize: 11, opacity: 0.7 }}>
              账户总额
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingTop: 15
            }}
          >
            <View>
              <Text style={styles.text1}>20,000,000.00</Text>
              <Text style={styles.text2}>可提现金额(元)</Text>
            </View>
            <View>
              <Text style={styles.text1}>20,000,000.00</Text>
              <Text style={styles.text2}>本月收益(元)</Text>
            </View>
            <View>
              <Text style={styles.text1}>20,000,000.00</Text>
              <Text style={styles.text2}>累计收益(元)</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 13,
    color: "#fff",
    paddingBottom: 5
  },
  text2: {
    fontSize: 11,
    color: "#fff",
    opacity: 0.7
  },
  topcontant: {
    backgroundColor: "#FA3E45",
    borderRadius: 5,
    height: 175,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16
  },
  toptitle: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between"
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4398ff"
  }
});
0;
