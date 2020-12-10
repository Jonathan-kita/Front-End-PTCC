import React, { useContext, useState, useEffect } from 'react';
import ItensList from "../ItensList";
import { Container, List } from "./styles";
import data from '../../../data/data1';
import LojaContext from '../../../data/Loja/Context'
function Alimentos({ navigation }) {


  const { IdLoja } = useContext(LojaContext)

  const [lista, setlista] = useState('')
  useEffect(() => {
    data[8](IdLoja).then((results) => {

      return setlista(results)
    })
  },
    [])

  return (
    <Container>
      <List
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={(item) => <ItensList item={item} onPress={() => navigation.navigate('Produto', item)} />}

      />
    </Container>
  );
}

Alimentos.navigationOptions = {
  title: "Alimentos",
};

export default Alimentos;
