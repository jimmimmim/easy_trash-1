// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import {
StyleSheet, TouchableOpacity, Text, View,
FlatList, ActivityIndicator, Platform
} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import { Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

import Category_Notice from '../data/Category_Notice';

// 쓰레기 대백과
function TrashpediaScreen({ navigation }) {

  // Search bar
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const onChangeSearch = query => setSearchQuery(query);

  // Search (https://snack.expo.dev/embedded/@aboutreact/example-of-search-bar-in-react-native?iframeId=ewbug1wk1e&preview=true&platform=ios&theme=dark)
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

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

    const ItemView = ({ item }) => {
      return (
        // Flat List Item
        {/*<Card>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.email}</Paragraph>
            </Card.Content>
        </Card>
        */},
        <View>
            <Card onPress={() => getItem(item)}>
                <Card.Content>
                  <Title>{item.name}</Title>
                  <Paragraph>{item.email}</Paragraph>
                </Card.Content>
            </Card>
            {/*<Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.name}
                {'\n'}
                {item.email.toUpperCase()}
            </Text>*/}
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
      // Function for click on an item
      alert(item.name + '의 경우'+ '\n' + item.email);
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
          onIconPress={() => alert('검색')}
          value={search}
          style={{marginBottom: 10, backgroundColor: '#FFF'}}
        />
        {/*<View>
          <Text>{JSON.stringify(Category_Notice)}</Text>
        </View>*/}
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          style={{backgroundColor: '#FFF'}}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>검색</Text>
      </TouchableOpacity>
      <Text style={text.text_yellow}>쓰레기 대백과 페이지</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')} style={button.buttonBox_yellow}>
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