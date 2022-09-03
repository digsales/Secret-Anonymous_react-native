import { React } from "react";
import { 
    StyleSheet,
    View,
} from "react-native";


const ListSeparator = ({
  
}) => {

  return (

    <View style={styles.separator}></View>

  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: '#D3D3D3',
  },

});

export default ListSeparator;