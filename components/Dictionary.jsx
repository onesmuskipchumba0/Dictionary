import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const Dictionary = ({ word }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    'x-rapidapi-key': '396c5b3581mshbd679aec73413f1p1a62efjsna8ba8090694e',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  };

  const fetchData = async (searchedWord) => {
    if (!searchedWord) {
      Alert.alert('Please enter a word to search.');
      return;
    }

    setLoading(true);
    try {
      const url = `https://wordsapiv1.p.rapidapi.com/words/${searchedWord}`;
      const res = await axios.get(url, { headers });
      setData(res.data || {});
      console.log(res.data);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', err.message || 'Something went wrong.');
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchData(word);
    }
  }, [word]);

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={() => fetchData(search)}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Display Pronunciation */}

      <View style={{flexDirection:'row', width:'100%'}}>
          {data?.pronunciation?.all && (
            <Text style={styles.resultText}>
              <Text style={{ fontWeight: 'bold' }}>Pronunciation: </Text>
              {data.pronunciation.all}
            </Text>
          )}
          {data?.syllables?.count && (
            <Text style={styles.resultText}>
              <Text style={{ fontWeight: 'semibold'}}>Syl: </Text>
              {data.syllables.count}
            </Text>
          )}
      </View>

      {/* Results Section */}
      <ScrollView>
          <View style={styles.resultsContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : data?.results?.length > 0 ? (
              data.results.map((element, index) => (
                <View key={index} style={styles.resultBlock}>
                  <Text style={styles.resultText}>
                    {element.partOfSpeech}
                  </Text>
                  <Text style={styles.resultText}>
                    <Text style={{ fontWeight: 'bold' }}>Definition {index + 1}: </Text>
                    {element.definition}
                  </Text>
                  {/* Synonyms Section */}
                  {element?.synonyms?.length > 0 ? (
                    <Text style={styles.resultText}>
                      <Text style={{ fontWeight: 'bold' }}>Synonyms: </Text>
                      {element.synonyms.join(', ')}
                    </Text>
                  ) : (
                    <Text style={styles.resultText}>
                      <Text style={{ fontWeight: 'bold' }}>Synonyms: </Text>No synonyms available
                    </Text>
                  )}
                  {element?.similarto?.length > 0 ? (
                    <Text style={styles.resultText}>
                      <Text style={{ fontWeight: 'bold' }}>Similar to: </Text>
                      {element.similarto.join(', ')}
                    </Text>
                  ) : null}
                  {element?.derivation?.length > 0 ? (
                    <Text style={styles.resultText}>
                      <Text style={{ fontWeight: 'bold' }}>Derivation: </Text>
                      {element.derivation.join(', ')}
                    </Text>
                  ) : null}
                </View>
              ))
            ) : (
              <Text style={styles.noDataText}>No Data found</Text>
            )}
          </View>
      </ScrollView>
    </View>
  );
};

export default Dictionary;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E2C', // Primary color
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#3D5A80', // Secondary color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#fff', // White text for better readability
    backgroundColor: '#3D5A80', // Secondary background
  },
  resultsContainer: {
    padding: 10,
    flex: 1,
    width: '100%'
  },
  resultBlock: {
    marginBottom: 15,
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#E63946', // Accent color for key text
  },
  noDataText: {
    marginTop: 10,
    fontSize: 18,
    color: '#3D5A80', // Secondary color for no data message
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E2C', // Same as primary color to match background
  },
});
