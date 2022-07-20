// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import {
StyleSheet, TouchableOpacity, Text, View,
FlatList, ActivityIndicator, Platform, Alert
} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import { Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

import Category_Notice from '../data/Category_Notice.json';

// 쓰레기 대백과
function TrashpediaScreen({ navigation }) {

  // Search (https://snack.expo.dev/embedded/@aboutreact/example-of-search-bar-in-react-native?iframeId=ewbug1wk1e&preview=true&platform=ios&theme=dark)
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [searchtext, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };

  return (
    <View style={layout.backgroundContainerMain}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>기능 안내</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.searchContainer}>
        <Searchbar
          placeholder="검색어 입력"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          onIconPress={() => Alert.alert('안내창', 'text~')}
          value={search}
          style={{marginBottom: 10, backgroundColor: '#FFF'}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>검색</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MoreContentScreen')} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>더 알아보기</Text>
      </TouchableOpacity>
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

export default TrashpediaScreen;