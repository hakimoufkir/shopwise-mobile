import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSortData} from '../../../redux/slices/user';

const styles = {
  parentView: {
    marginHorizontal:15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 2,
    marginRight:2,
    backgroundColor: '#1acbaa', // Use your color values here
    borderRadius: 12,
    padding: 2,
    gap: 7.5, // Use appropriate spacing value
    paddingLeft: 15,
  },
  button: {
    padding: 7.5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16, // Use appropriate font size
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
};
export default function SortCategories() {
  const dispatch = useDispatch();
  const sortDataRedux = useSelector(state => state.userRedux.sortData);
  const [activeSort, setActiveSort] = useState(sortDataRedux);
  const sortCategoryData = ['All', 'Popular', 'Recommended', 'More'];
  useEffect(() => {
    dispatch(setSortData(activeSort));
    // console.log('activeSortFromRedux', sortDataRedux)
    // console.log('activeSortFromDOM', activeSort)
  }, [sortDataRedux,activeSort]);

  return (
    <View style={styles.parentView}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;
        const activeButtonStyle = isActive ? styles.activeButton : {};
        const textStyle = isActive ? styles.blackText : styles.whiteText;

        return (
          <TouchableOpacity
            onPress={() => {
              setActiveSort(sort);
            }}
            key={index}
            style={[styles.button, activeButtonStyle]}>
            <Text style={[styles.text, textStyle]}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
