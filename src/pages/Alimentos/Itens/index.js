import React, { useContext, useState, useEffect } from 'react';
import { Container, List } from "./styles";
import ItensList from "../ItensList";
import data from "../../../data/data1";
import { TouchableHighlight } from 'react-native'
import LojaContext from '../../../data/Loja/Context'



const Itens = ({ navigation }) => {
  const { Context, GetId } = useContext(LojaContext)
  const [lista, setlista] = useState('');
  console.log(Context)
  useEffect(() => {
    if (Context === '2' || Context === '3') {
      setlista(navigation.state.params.item);
    }
    if (Context === '0') {
      data[2]().then((results) => {
        console.log(results)
        return setlista(results)
      })
    }
  }, []);

  return (
    <List
      data={lista}
      keyExtractor={(item) => String(item.idproduto)}
      renderItem={(item) =>
        <TouchableHighlight onPress={() => { navigation.navigate('Produto', item), GetId(item.item.idempresa) }}>
          <ItensList
            item={item}
          />
        </TouchableHighlight>
      }

    />
  );
};

export default Itens;
