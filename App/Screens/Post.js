import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default function Test() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        // 'http://192.168.0.116:3000/api/postsR/posts',
        'http://192.168.1.103:3000/api/postsR/posts',
      );
      const data = await response.json();
      setIsLoading(false);
      setAllPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const navigator=useNavigation();
  const onPostClick=(item)=>{
    navigator.navigate('Post-detail',{allPosts:item}); 
  }

  const renderItem = ({item, index}) => (
    <TouchableOpacity key={index} onPress={() => onPostClick(item)}>
      <View style={styles.postContainer}>
        <Image style={styles.postImage} source={{uri: item.images[0]}} />
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postDescription}>{item.description}</Text>
        <Text style={styles.postTag}>Tag: {item.tag}</Text>
        <Text style={styles.postCategory}>Category: {item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={allPosts}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postDescription: {
    fontSize: 16,
    marginBottom: 4,
  },
  postTag: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 4,
  },
  postCategory: {
    fontSize: 16,
    color: 'green',
    marginBottom: 4,
  },
});
