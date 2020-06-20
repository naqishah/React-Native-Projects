/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {albums: [] };

    UNSAFE_componentWillMount() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail album={album} key={album.title}/>);
    }

    render() {

        return (
            <View>
              {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;