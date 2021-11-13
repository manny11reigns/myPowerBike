import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? 25 : 0,
    marginTop: 10,
  },

  image: {
    width: "100%",
    height: 250,
  },

  textSection: {
    marginTop: 30,
  },

  btnSection: {
    marginTop: 20,
  },
  gmailButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  appleButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  signupText: {
    marginTop: 20,
  },
  signupMessage: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
