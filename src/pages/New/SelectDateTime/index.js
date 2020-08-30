import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "~/components/Background";

const SelectDateTime = () => {
  return <Background />;
};

export default SelectDateTime;

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: "Selecione o horário",
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
