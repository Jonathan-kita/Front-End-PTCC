import React, { useEffect, useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Photo,
  Content,
  BoxForName,
  Name,
  Text,
  BoxForDescripition,
  Descripition,
  Valor,
  Button,
  PhotoContainer
} from './styles';
import Back from '../../components/Back';
import data from '../../data/data1';
import { moedaMask } from '../../Mascara/mask';
import LojaContext from '../../data/Loja/Context';

function Produto({ navigation }) {
  console.log(navigation);
  const { item } = navigation.state.params;

  return (
    <Container>
      <Content>
        <PhotoContainer>
          <Photo source={{
            uri: "http://192.168.15.11:3333/uploads/product/save/" + item.foto_principal,
          }} resizeMode='contain' />
        </PhotoContainer>
      </Content>
      <BoxForName>
        <Name>{item.nome_prod}</Name>
      </BoxForName>

      <BoxForDescripition>
        <Text>Categoria: {item.nome_categoria}</Text>
        <Text>Espécie: {item.especie}</Text>
        <Text>Raça: {item.raca}</Text>
        <Text>Marca: {item.marca}</Text>
        <Text>Peso: {moedaMask("'" + item.peso + "'")} {item.unidade_medida}</Text>
        <Descripition>
          Descrição: {item.descricao}
        </Descripition>
      </BoxForDescripition>

      <Button onPress={() => navigation.navigate('Finalizacao')}>
        <Valor>R$ {moedaMask("'" + item.valor + "'")}</Valor>
        <Icon name="plus" size={35} color="#fff" />
      </Button>
    </Container>
  );
}

Produto.navigationOptions = ({ navigation }) => ({
  headerTitle: '',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerLeft: () => (
    <Back onPress={() => navigation.navigate('Loja', { nome: navigation.state.params.item.nome_empresa })} color="#2dc7ff" />
  ),
});
export default Produto;
