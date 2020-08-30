import React, { useEffect, useState } from "react";

import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import api from "~/services/api";

import Background from "~/components/Background";

import { Container, ProvidersList, Provider, Avatar, Name } from "./styles";

const SelectProvider = ({ navigation }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get("providers");

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate("SelectDateTime", { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : "https://avatars2.githubusercontent.com/u/6216736?s=460&u=163fdfb238cfcc0bffc8a53b2403929ff61743ba&v=4",
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: "Selecione o prestador",
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Dashboard");
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
