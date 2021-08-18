import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Detalhes from '../Detalhes';

export default function Filmes({ data }){
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image
        source={{ uri: data.foto}}
        style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={ () => setVisibleModal(true) }>
          <FontAwesome name="play-circle-o" color="#FFF" size={25} />
            <Text style={styles.botaoTexto}>RESUMO</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Modal  transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={ () => setVisibleModal(false) } />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
    borderRadius: 5
  },
  capa:{
    height: 250,
    zIndex:2,
  },
  titulo:{
    padding: 15,
    fontSize: 18
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  botao:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 100,
    backgroundColor: 'red',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    paddingLeft: 10,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});