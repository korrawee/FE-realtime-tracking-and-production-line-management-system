import * as React from 'react';
import {Button, FlatList, StyleSheet} from 'react-native';
import {departmentCardData} from '../../src/typings';
import DepartmentCard from '../Cards/DepartmentCard';
import MainContainer from '../Containers/MainContainer';
import BigText from '../Texts/BigText';

const DashboardScreen = ({navigation}: any) => {
  const DATA: Array<departmentCardData> = [
    {
      detailID: 1,
      title: 'ต้มไก่',
      productivity: 100,
      entered: 20,
      member: 20,
      detailScreenName: 'Detail',
    },
    {
      detailID: 2,
      title: 'ต้มไก่',
      productivity: 100,
      entered: 20,
      member: 20,
      detailScreenName: 'Detail',
    },
    {
      detailID: 3,
      title: 'ต้มไก่',
      productivity: 100,
      entered: 20,
      member: 20,
      detailScreenName: 'Detail',
    },
    {
      detailID: 4,
      title: 'ต้มไก่',
      productivity: 100,
      entered: 20,
      member: 20,
      detailScreenName: 'Detail',
    },
  ];

  const renderDepartmentCard = ({item}: any) => (
    <DepartmentCard
      detailID={item.detailID}
      title={item.title}
      producttivity={item.productivity}
      entered={item.entered}
      member={item.member}
      detailScreenName={item.detailScreenName}
      testID="DepartmentCard"
    />
  );

  return (
    <MainContainer>
      <BigText style={styles.header}>ภาพรวมแผนก</BigText>
      <FlatList data={DATA} renderItem={renderDepartmentCard} />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    width: '100%',
  },
});

export default DashboardScreen;
