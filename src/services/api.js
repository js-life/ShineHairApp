import axios from "axios";
import { Platform } from "react-native";

const api = axios.create({
  baseURL:
    Platform.OS === "ios"
      ? "http://localhost:3333"
      : "http://192.168.15.7:3333",
});

export default api;
