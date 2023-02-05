import { StyleSheet, Image } from 'react-native';

export function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage == null
    ? placeholderImageSource
    : { uri: selectedImage }
  
  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});