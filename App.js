import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import api from './src/Services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();

  }, []);
  
  if(loading){
    return(
      <View style={{ alignItems: 'center', justifyContent:'center', flex:1 }}>
        <ActivityIndicator color="red" size={45} />
      </View>
    )
  }else{
 return (
   <View style={styles.container}>
     <View style={{ height: 40}}>
       <Text style={styles.head}>Filmes</Text>
     </View>
     <FlatList
      data={filmes}
      keyExtractor={ item => String(item.id) }
      renderItem={ ({ item }) => <Filmes data={item} /> }
     />

   </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#211F20',
  },
  head:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: 'red'
  }
});
