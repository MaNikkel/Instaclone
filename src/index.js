import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import Routes from './routes';

export default function App(){
    return <Routes />
}
