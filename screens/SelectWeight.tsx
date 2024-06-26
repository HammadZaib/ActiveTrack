import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBars from "../components/StatusBars";
import Navigations from "../components/Navigation";
import ToggleMetric from "../components/ToggleMetric";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SelectWeight = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.selectWeight, styles.scrollFlexBox]}>
      <View style={styles.statusBar}>
        <StatusBars
          barsStatusBarsiPhoneLight={require("../assets/barsstatus-barsiphonelight.png")}
          barsStatusBarsiPhoneLightHeight={50}
          barsStatusBarsiPhoneLightOverflow="hidden"
          barsStatusBarsiPhoneLightFlex={1}
          barsStatusBarsiPhoneLightWidth="unset"
        />
      </View>
      <View style={[styles.scroll, styles.scrollFlexBox]}>
        <Navigations
          step2Of5="Step 1 of 8"
          showStep2Of
          showSkip
          navigationPosition="unset"
          navigationAlignSelf="stretch"
          step2OfColor="#2f548d"
          step2OfMarginLeft="unset"
          skipMarginLeft="unset"
          onBackButtonPress={() => navigation.goBack()}
        />
        <Text style={[styles.selectHeight, styles.selectHeightTypo]}>
          Select weight
        </Text>
        <ToggleMetric
          fT="KG"
          cm="LB"
          property1FTActivePosition="unset"
          property1FTActiveMarginTop={60}
        />
        <View style={[styles.heightInput, styles.continueFlexBox]}>
          <TextInput style={[styles.input, styles.inputShadowBox]} />
          <Text style={styles.cmTypo}>kg</Text>
          <Text style={[styles.lbs, styles.cmTypo]}>lbs</Text>
        </View>
      </View>
      <View style={[styles.continue, styles.continueFlexBox]}>
        <Pressable
          style={[styles.button, styles.inputShadowBox]}
          onPress={() => navigation.navigate("TrainingLevel")}
        >
          <Text style={[styles.startTraining, styles.selectHeightTypo]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  selectHeightTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  continueFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
    alignItems: "center",
  },
  cmTypo: {
    marginTop: 10,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  statusBar: {
    top: 0,
    left: 0,
    width: 390,
    height: 50,
    justifyContent: "flex-end",
    zIndex: 0,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  selectHeight: {
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorGray_200,
    marginTop: 60,
  },
  input: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 97,
    height: 64,
    backgroundColor: Color.colorWhite,
  },
  lbs: {
    display: "none",
  },
  heightInput: {
    marginTop: 60,
  },
  scroll: {
    zIndex: 1,
    marginTop: 33,
    alignSelf: "stretch",
    alignItems: "center",
  },
  startTraining: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    color: Color.colorWhite,
  },
  button: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primary,
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  continue: {
    width: "92.05%",
    right: "4.1%",
    bottom: 0,
    left: "3.85%",
    paddingBottom: Padding.p_6xl,
    zIndex: 2,
    position: "absolute",
  },
  selectWeight: {
    width: "100%",
    height: 692,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_31xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SelectWeight;
