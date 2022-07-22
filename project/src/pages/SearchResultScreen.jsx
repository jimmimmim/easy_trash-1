// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import {
StyleSheet, TouchableOpacity, Text, View,
FlatList, ActivityIndicator, Platform, Alert, ImageBackground
} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import { Card, Title, Paragraph } from 'react-native-paper';
// import * as RNFS from 'react-native-fs';

// json file
import * as trash from '../data/Category_Notice.json';

// 쓰레기 대백과
function SearchResultScreen({ route, navigation }) {

  const valueText = route.params.value;

  const categoryNotice = trash.categories;
  console.log('출력시작 - 0720');
  console.log(categoryNotice[0].category);
  console.log(categoryNotice[1].category);
  console.log(categoryNotice[1].notice);

  // Search (https://snack.expo.dev/embedded/@aboutreact/example-of-search-bar-in-react-native?iframeId=ewbug1wk1e&preview=true&platform=ios&theme=dark)
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
      // fetch('https://jsonplaceholder.typicode.com/users')
      fetch('https://my-json-server.typicode.com/jimmimmim/easytrash_db/categories')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const searchFilterFunction = (valueText) => {
      if (valueText) {
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.category
            ? item.category.toUpperCase()
            : ''.toUpperCase();
          const textData = valueText.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(valueText);
      } else {
        setFilteredDataSource(masterDataSource);
        setSearch(valueText);
      }
    };

    const ItemView = ({ item }) => {
      return (
        <View>
            <Card onPress={() => getItem(item)}>
                <Card.Content>
                  <Title>{item.category}</Title>
                  <Paragraph>{item.notice}</Paragraph>
                </Card.Content>
            </Card>
        </View>
      );
    };

    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 1.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };

    const getItem = (item) => {
      Alert.alert('배출 방법', item.category + '의 경우 '+ item.notice);
    };

  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TrashpediaScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.searchContainer}>
        <Text style={text.showText}>검색어:  {valueText}</Text>
        <FlatList
           data={filteredDataSource}
           renderItem={ItemView}
           keyExtractor={(item, index) => index.toString()}
           ItemSeparatorComponent={ItemSeparatorView}
           renderItem={ItemView}
           style={{backgroundColor: '#FFF'}}
        />
{/*         <FlatList */}
{/*           data={filteredDataSource} */}
{/*           keyExtractor={(item, index) => index.toString()} */}
{/*           ItemSeparatorComponent={ItemSeparatorView} */}
{/*           renderItem={ItemView} */}
{/*           style={{backgroundColor: '#FFF'}} */}
{/*         /> */}
      </View>
      <TouchableOpacity onPress={() => searchFilterFunction(valueText)} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>결과 보기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MoreContentScreen')} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>더 알아보기</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 20,
  },
});

export default SearchResultScreen;