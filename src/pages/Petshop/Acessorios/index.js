import React, { useContext, useState, useEffect } from 'react';

import ItensList from '../ItensList';
import { Container, List } from './styles';
import data from '../../../data/data1';
import LojaContext from '../../../data/Loja/Context'


function Acessorios({ navigation }) {

  const { IdLoja } = useContext(LojaContext)

  const [lista, setlista] = useState('')
  useEffect(() => {
    data[7](IdLoja).then((results) => {
      return setlista(results)
    })
  },
    [])


  return (
    <Container>
      <List
        data={lista}
        keyExtractor={(item) => String(item.idempresa)}
        renderItem={(item) => (
          <ItensList
            onPress={() => navigation.navigate('Produto', item)}
            item={item}
          />
        )}
      />
    </Container>
  );
}

Acessorios.navigationOptions = {
  title: 'Acessórios',
};

export default Acessorios;
