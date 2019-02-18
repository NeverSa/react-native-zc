import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eye: true };
  }

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
          <TouchableOpacity
          onPress={() => this.props.navigation.push("Message")}
          >
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/message.png"
              }}
              style={{ height: 18, width: 19 }}
            />
             </TouchableOpacity>
          </View>
        </View>

        <View style={styles.topcontant}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
              {this.state.eye ? "89,568.00" : "****"}
            </Text>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/money-jian.png"
              }}
              style={{ height: 8, width: 14, marginLeft: 10 }}
            />
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ eye: !this.state.eye });
                }}
              >
                {this.state.eye == true ? (
                  <Image
                    source={{
                      uri:
                        "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/eye-icon.png"
                    }}
                    style={{ height: 14, width: 14 }}
                  />
                ) : (
                  <Image
                    source={{
                      uri:
                        "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/eye-closed.png"
                    }}
                    style={{ height: 14, width: 14 }}
                  />
                )}
              </TouchableOpacity>
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
              <Text style={styles.text1}>
                {this.state.eye ? "20,000.00" : "****"}
              </Text>
              <Text style={styles.text2}>可提现金额(元)</Text>
            </View>
            <View>
              <Text style={styles.text1}>
                {this.state.eye ? "20,000.00" : "****"}
              </Text>
              <Text style={styles.text2}>本月收益(元)</Text>
            </View>
            <View>
              <Text style={styles.text1}>
                {this.state.eye ? "20,000.00" : "****"}
              </Text>
              <Text style={styles.text2}>累计收益(元)</Text>
            </View>
          </View>
        </View>

        <View style={styles.bank}>
          <View style={styles.bankitem}>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/bank-icon.png"
              }}
              style={{ width: 28, height: 19, marginRight: 10 }}
            />
            <Text style={{ marginRight: 30, color: "#333", fontSize: 14 }}>
              银行卡
            </Text>
          </View>
          <View style={styles.bankitem}>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/withdraw-icon.png"
              }}
              style={{ width: 28, height: 19, marginLeft: 30, marginRight: 10 }}
            />
            <Text style={{ color: "#333", fontSize: 14 }}>提现</Text>
          </View>
        </View>

        <View style={styles.mydatatitle}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#333" }}>
            我的数据
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.push("AccountInfo")}
        >
          <View style={styles.listnav}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={{
                  uri:
                    "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/earnings.png"
                }}
                style={{ width: 38, height: 38, marginRight: 16 }}
              />
              <Text style={styles.listtext}>今日收益(元)</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.listtext2}>200.00</Text>
              <Image
                source={{
                  uri:
                    "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/my-data.png"
                }}
                style={{ width: 8, height: 14, marginRight: 16 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.listnav}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/team-icon.png"
              }}
              style={{ width: 38, height: 38, marginRight: 16 }}
            />
            <Text style={styles.listtext}>团队新增(人)</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.listtext2}>200.00</Text>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/my-data.png"
              }}
              style={{ width: 8, height: 14, marginRight: 16 }}
            />
          </View>
        </View>

        <View style={styles.listnav}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/earnings-icon.png"
              }}
              style={{ width: 38, height: 38, marginRight: 16 }}
            />
            <Text style={styles.listtext}>收益记录</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.listtext2}>200.00</Text>
            <Image
              source={{
                uri:
                  "https://agency-h5.oss-cn-beijing.aliyuncs.com/home/my-data.png"
              }}
              style={{ width: 8, height: 14, marginRight: 16 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listnav: {
    flexDirection: "row",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FAFAFA",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  listtext: {
    color: "#333333",
    fontSize: 14,
    marginLeft: 16
  },
  listtext2: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 16
  },
  listleft: {
    flexDirection: "row"
  },
  mydatatitle: {
    marginTop: 28,
    borderColor: "#F23030",
    borderLeftWidth: 4,
    paddingLeft: 10,
    marginBottom: 10
  },
  bankitem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bank: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30
  },
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

