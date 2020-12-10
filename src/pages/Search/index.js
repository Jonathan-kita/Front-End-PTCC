import React, { useEffect, useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  SearchBackground,
  Filtros,
  SearchTxt,
  Title,
  SelectInput,
  ProcuraPorClick,
  ViewSelect,
} from './styles';

import { Filtro } from '../../data/data';
import data from '../../data/data1';
import Produtos from '../../components/Produtos';
import LojaContext from '../../data/Loja/Context';

function Search({ navigation }) {
  const [filtro, setFiltro] = useState('0');
  const { GetContext } = useContext(LojaContext)

  function Contexto(id) {
    GetContext(id);
  }

  function pesquisar(e) {
    console.log(e.nativeEvent.text);
    console.log(filtro);
    let texto = e.nativeEvent.text;
    if (filtro === '0') {
      data[10]("nome_prod", texto).then(
        res => {
          if (verificaBusca(res)) {
            Contexto('2');
            navigation.navigate('Itens', { item: res })
          }
        }
      );
    } else {
      if (filtro === 'nome_empresa') {
        data[11](texto).then(
          res => {
            if (verificaBusca(res)) {
              Contexto('1');
              navigation.navigate('Lojas', { item: res })
            }
          }
        );
      } else {
        data[10](filtro, texto).then(
          res => {
            if (verificaBusca(res)) {
              Contexto('3');
              navigation.navigate('Itens', { item: res })
            }
          }
        );
      }
    }
  }

  function verificaBusca(arrayResult) {
    if (arrayResult.length === 0 || arrayResult === []) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Container>
      <SearchBackground>
        <Icon name="search" size={22} color="#f76abc" />
        <SearchTxt onSubmitEditing={pesquisar} />
      </SearchBackground>
      <Filtros>
        <Title>Filtros</Title>
        <ViewSelect>
          <SelectInput
            placeholder={{}}
            items={Filtro}
            onValueChange={(value) => {
              return setFiltro(value);
            }}
            InputAccessoryView={() => null}
            value={filtro}
          />
        </ViewSelect>
      </Filtros>
      <ProcuraPorClick>
        <Title>O que procura?</Title>
        <Produtos onPress={() => navigation.navigate('Alimentos')} />
      </ProcuraPorClick>
    </Container>
  );
}

Search.navigationOptions = {
  title: 'Buscar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={22} color={tintColor} />
  ),
};

export default Search;
