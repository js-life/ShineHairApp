import React, { useMemo } from "react";

import { formatRelative, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "~/components/Background";

import api from "~/services/api";

import { Container, Avatar, Name, Time, SubmitButton } from "./styles";

const Confirm = ({ navigation }) => {
  const provider = navigation.getParam("provider");
  const time = navigation.getParam("time");

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post("appointments", {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate("Dashboard");
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : "https://avatars2.githubusercontent.com/u/6216736?s=460&u=163fdfb238cfcc0bffc8a53b2403929ff61743ba&v=4",
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default Confirm;

Confirm.navigationOptions = ({ navigation }) => ({
  title: "Confirme o agendamento",
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
