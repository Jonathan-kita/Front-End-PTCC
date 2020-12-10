import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { moedaMask } from '../../../Mascara/mask';
import {
  Container,
  Left,
  SymbleEnterprise,
  Info,
  Name,
  Right,
  Adicionais,
  RamoAtuacao,
  TempoDeEntrega,
  ValorFrete,
} from "./styles";

function Avaliado({ item }) {

  return (
    <Container>
      <Left>
        <SymbleEnterprise
          color='#f76abc'
          source={{
            uri: "http://192.168.15.11:3333/uploads/product/save/" + item.item.foto_principal,
          }}
        />
        <Info>
          <Name>{item.item.nome_prod}</Name>
          <Adicionais>
            <RamoAtuacao>
              <TempoDeEntrega>{item.item.especie + " "}</TempoDeEntrega>
              <MaterialCommunityIcons
                name="circle"
                size={5}
                color="rgba(0,0,0,0.4)"
                style={{
                  marginTop: 3,
                }}
              />
              <TempoDeEntrega>{" " + item.item.raca}</TempoDeEntrega>
            </RamoAtuacao>
            <ValorFrete>Preço: {" R$ " + moedaMask("'" + item.item.valor + "'")}</ValorFrete>
          </Adicionais>
        </Info>
      </Left>
      <Right>
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star" size={12} color="#ffd700" />
        <Icon name="star-half" size={12} color="#ffd700" />
      </Right>
    </Container>
  );
}

export default Avaliado;
