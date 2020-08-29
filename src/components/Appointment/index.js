/* eslint-disable react/prop-types */
import React, { useMemo } from "react";

import { formatRelative, parseISO } from "date-fns";
import { pt } from "date-fns/locale";

import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Left, Avatar, Info, Name, Time } from "./styles";

const Appointment = ({ data, onCancel }) => {

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider?.avatar
              ? data.provider?.avatar?.url
              : "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
          }}
        />
        <Info>
          <Name>{data.provider?.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default Appointment;
