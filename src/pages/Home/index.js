import React, { useState, useEffect, useContext } from 'react';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Carrossel from './Carrossel';

import Produtos from '../../components/Produtos';

import carrosselImage from '../../assets/imgCarrossel.jpg';

import Avaliado from './Avaliado';

import { Container, List } from './styles';

import data from '../../data/data1';
import LojaContext from '../../data/Loja/Context'

function Home({ navigation }) {

  // Pega os Valores das Lojas Avalidas
  const [lista, setlista] = useState('');
  const { GetContext, GetId } = useContext(LojaContext)

  function Contexto() {
    GetContext('0');
  }

  useEffect(() => {
    data[0]().then((results) => {
      return setlista(results);
    });
  }, []);

  return (
    <Container>
      <Produtos onPress={() => { navigation.navigate('Alimentos'), Contexto }} />
      <Carrossel image={carrosselImage} />
      <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => (
          <Avaliado
            item={item}
            onPress={() => navigation.navigate('PetShop')}
          />
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home-outline" size={30} color={tintColor} />
  ),
};

export default Home;
