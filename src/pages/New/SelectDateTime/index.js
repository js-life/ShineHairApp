import React, { useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "~/components/Background";
import DateInput from "~/components/DateInput";

import { Container } from "./styles";

const SelectDateTime = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
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
