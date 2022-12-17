import React, { Component, useState } from "react";
import { Modal, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from "react-native";

class App extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    visible = false;
  }

  render() {

    const { agent } = this.props;

    if(!agent) {
      return null
    };

    return (
      
      <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={agent ? true : false}
            onRequestClose={() => this.setModalVisible(agent)}
          >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ImageBackground source={{uri: 'https://portaldosgamesbr.files.wordpress.com/2021/10/banner-valorant-mapa-fracture.png?w=1568'}} style={styles.fractureBackground}>
                        <View style={styles.title}>
                            <Image style={styles.picture} source={{ uri: agent.bustPortrait}}/>
                                <View style={styles.subtitle}>
                                    <Image style={styles.imageClass} source={{ uri: agent.role.displayIcon}}/>
                                    <Text style={styles.nameRole}>{agent.role.displayName}</Text>
                                    <Text style={styles.nameAgent}>{agent.displayName}</Text>
                                </View>
                            </View>

                            <View style={styles.containerSkills}>

                              <Text>{agent.abilities.map(({displayName, description, displayIcon}) => (

                                <View style={styles.teste} key={displayName}>
                                    <Text style={styles.skills}>
                                      {displayName}
                                    </Text>

                                    <Text style={styles.descricao}>
                                      {description}
                                    </Text>

                                    <Image style={styles.imageSkill} source={{uri: displayIcon}}/>
                            
                                </View>

                              ))}</Text>

                            </View>

                            <Text style={styles.descriptionAgent}>{agent.description}</Text>

                    </ImageBackground>
                </View>
            </View>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    picture: {
      width: 250,
      height: 400,
      marginTop: 50,
      position: 'absolute',
    },
    title:  {
      flexDirection: 'row',
    },
    subtitle: {
      marginLeft: 200,
    },
    imageClass: {
      width: 40,
      height: 40,
      opacity: 0.5,
      marginHorizontal: 10,
      position: 'absolute',
    },
    fractureBackground: {
      width: '100%',
      height: '100%',
    },
    nameAgent: {
      color: '#fffafa',
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft: 38,
    },
    nameRole: {
      color: '#fffafa',
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 38,
    },
    descriptionAgent: {
      color: '#fffafa',
      fontSize: 15,
      position: "absolute",
      marginTop: 420,
      marginHorizontal: 10,
    },
    containerSkills: {
      position: "absolute",
      marginTop: 70,
      marginLeft: 230,
    },
    imageSkill: {
      width: 22,
      height: 22,
      marginLeft: 80,
      marginTop: 5,
      position: 'absolute',
      resizeMode: "cover",
    },
    skills: {
      color: '#fffafa',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 5,
    },
    descricao: {
      color: '#fffafa',
      fontSize: 8,
    },
    teste: {
      width: 150,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      width: '100%',
      padding: 1,
      height: 520,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
  });
  
  export default App;