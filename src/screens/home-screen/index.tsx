import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderMain from '../../components/header-main';
import BannerCarousel from '../../components/banner-carousel';
import MainCategories from '../../components/main-categories';

export default function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: '#f5f5f5'}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
