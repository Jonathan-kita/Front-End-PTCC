import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableHighlight } from "react-native";
import LojaContext from '../../../data/Loja/Context';
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

function Avaliado({ item, navigation }) {
  console.log(item);
  const { GetId } = useContext(LojaContext)

  function setId() {

    GetId(item.item.idempresa)

    navigation.navigate("PetShopAcessorios", item)
  }

  return (
    <TouchableHighlight onPress={setId}>
      <Container>
        <Left>
          <SymbleEnterprise
            color='#f76abc'
            source={{
              uri: "http://192.168.15.11:3333/uploads/company/save/" + item.item.foto_perfil,
            }}
          />
          <Info>
            <Name>{item.item.nome}</Name>
            <Adicionais>
              <ValorFrete>Frete: {" " + item.item.frete === '' || item.item.frete === null || item.item.frete === '0000' ? 'grátis' : item.item.frete}</ValorFrete>
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
    </TouchableHighlight>
  );
}

export default Avaliado;
