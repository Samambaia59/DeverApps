import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, FlatList,
  Pressable, useColorScheme, Platform, Dimensions, SafeAreaView
} from 'react-native';

const POSTS = Array.from({ length: 12 }).map((_, i) => ({ id: String(i) }));
const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 3;

export default function Ex10() {
  const [isFollowing, setIsFollowing] = useState(false);
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const colors = {
    background: isDark ? '#121212' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#000000',
    textSecondary: isDark ? '#AAAAAA' : '#666666',
    card: isDark ? '#1E1E1E' : '#FFFFFF',
    primary: '#0095f6',
  };

  const renderItem = () => (
    <View style={[styles.photoBox, { borderColor: colors.background }]} />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab6761610000e5eb981665a363d33267d3e91d8e' }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: colors.text }]}>$uicideBoy$</Text>
        <Text style={[styles.role, { color: colors.textSecondary }]}>Grupo Musical</Text>
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            isFollowing ? styles.buttonOutline : styles.buttonSolid,
            {
              opacity: pressed ? 0.7 : 1,
              borderColor: isFollowing ? colors.textSecondary : colors.primary
            }
          ]}
          onPress={() => setIsFollowing(!isFollowing)}
        >
          <Text style={[
            styles.buttonText,
            { color: isFollowing ? colors.text : '#fff' }
          ]}>
            {isFollowing ? 'Seguindo' : 'Seguir'}
          </Text>
        </Pressable>
      </View>

      <View style={[styles.statsCard, { backgroundColor: colors.card }]}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.text }]}>342</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.text }]}>3,6mi</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Seguidores</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, { color: colors.text }]}>17</Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Seguindo</Text>
        </View>
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderItem}
        contentContainerStyle={styles.postList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', paddingVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10, backgroundColor: '#333' },
  name: { fontSize: 22, fontWeight: 'bold' },
  role: { fontSize: 16, marginBottom: 15 },
  button: {
    paddingVertical: 8, paddingHorizontal: 32, borderRadius: 6, borderWidth: 1
  },
  buttonSolid: { backgroundColor: '#0095f6', borderColor: '#0095f6' },
  buttonOutline: { backgroundColor: 'transparent' },
  buttonText: { fontWeight: '600', fontSize: 14 },
  
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
      }
    })
  },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 14 },
  
  postList: { paddingBottom: 20 },
  photoBox: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: '#333',
    borderWidth: 1
  }
});