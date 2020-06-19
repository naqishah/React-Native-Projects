import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../screens/components/SearchBar';
import useResults from '../screens/hooks/useResults';
import ResultList from '../screens/components/ResultList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filerResultsByPrice = (price) => {

        return results.filter(result => {
            return result.price === price;
        });
    };


    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
            <ResultList results={filerResultsByPrice('$')} title='Cost Effective'/>
            <ResultList results={filerResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultList results={filerResultsByPrice('$$$')} title='Big Spenders'/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;