import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DraggableFlatList, {
  OpacityDecorator,
  RenderItemParams,
  ScaleDecorator,
  ShadowDecorator,
} from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {CollectionDragProps} from '../../config';

const NUM_ITEMS = 10;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  backgroundColor: string;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${index}`,
    label: String(index) + '',
    height: 100,
    width: 60 + Math.random() * 40,
    backgroundColor,
  };
});

const CollectionDrag: React.FC<CollectionDragProps> = () => {
  const ref = useRef(null);
  const [data, setData] = useState(initialData);

  const renderItem = ({item, drag, isActive}: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={0.5}>
          <ShadowDecorator>
            <TouchableOpacity
              onLongPress={drag}
              disabled={isActive}
              style={[
                styles.rowItem,
                {backgroundColor: isActive ? 'red' : item.backgroundColor},
              ]}>
              <Animated.Text style={styles.text}>{item.label}</Animated.Text>
            </TouchableOpacity>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView>
      <DraggableFlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        onDragEnd={({data}) => setData(data)}
      />
    </GestureHandlerRootView>
  );
};

export default CollectionDrag;

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
