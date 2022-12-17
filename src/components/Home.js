import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, FlatList, Button, ImageBackground} from 'react-native';
import Modal from './Modal';

export default class Home extends Component {

    state = {
        data: [],
        selectedAgent: null,
    }

    static navigationOption = {
        drawerLabel: "Home",
    }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  loadAgents = () => {
    fetch ("https://valorant-api.com/v1/agents")
      .then( res => res.json() )
      .then( res => {
        this.setState({
          data: res.data || []
        })
      })
  };

  removeSelectedAgent = () => {
    this.setState({ selectedAgent: null })
  };

  selectedAgent = ( agent ) => {
    this.setState({ selectedAgent: agent })
  };

  componentDidMount() {
    this.loadAgents();
  };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ImageBackground source={{uri: 'https://ojedacash.com.br/wp-content/uploads/2021/06/valorant-points.png'}} style={styles.card} resizeMode="cover">

                        <View style={styles.boxImage}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.bustPortrait}}
                            />

                           <Text style={styles.name}>#{ item.displayName }</Text>

                        </View>

                    <View>
                        <Button onPress={() => this.selectedAgent(item)} title="Detalhes do agente" color="gray"/>
                    </View>

                    </ImageBackground>
                )}
                keyExtractor={ item => item.uuid}
              />

              <Modal
                agent = { this.state.selectedAgent }
              />
          </View>
      )
  }
}

const styles = StyleSheet.create({
    image: {
      height: 220,
      width: 220,
      marginHorizontal: 25,
      marginTop: 25,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 150,
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    fundo: {
      width: 200,
      height: 200,
    },
    boxImage: {
      alignItems: 'center',
    },
    card: {
      marginHorizontal: 35,
      marginBottom: 35,
      backgroundColor: '#ff4656',
    },
    name: {
      textAlign: 'center',
      color: '#fffafa',
      fontSize: 40,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
});