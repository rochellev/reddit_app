import React from 'react';
import {Text, View} from "react-native";
import {getPosts} from "./selector";
import {useSelector} from "react-redux";
import {LceRenderer} from "../data/lceRenderer";
import { CONTENT } from '../data/LCE';

export const FrontScreen = () => {
  const posts = useSelector(getPosts);


  return (
    <View style={{paddingTop: 75}}>
      <Text>Posts</Text>
      <LceRenderer lce={posts} loading={Loading} content={renderList} error={renderNull} notRequested={renderNull} />
    </View>
  )

  
}

const renderNull = () => null;

const renderList = ({data}: CONTENT<string[]>) => {
  return <View>{data.map((title, index) => <Text key={index}>{title}</Text>)}</View>;
};

const Loading = () => {
  return <Text>LOADING....</Text>;
}