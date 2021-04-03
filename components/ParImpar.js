import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ParImpar(props){

    if(props.num % 2 == 0){

        return <Text>Par</Text>

    }else{
        return <Text>Impar</Text>
    }

  
}
