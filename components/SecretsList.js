import { React, useState } from "react";
import { 
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


const SecretsList = ({
  item
}) => {

  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);

  return (

    <View style={styles.card}>

        <View style={{flexDirection: 'column'}}>

            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>

            <View>
                <Text style={styles.secret}>{item.secret}</Text>
            </View>

        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20}}>

            <View style={{marginRight: 30}}>
                <TouchableWithoutFeedback onPress={() => {setLike(!like), setDislike(true)}}>
                    { like ?
                    <Ionicons style={styles.icon} name="heart-outline" size={22} color="black"/>
                    :
                    <Ionicons style={styles.icon} name="heart" size={22} color="red"/>
                    }
                </TouchableWithoutFeedback>
            </View>
            
            <View>
                <TouchableWithoutFeedback onPress={() => {setDislike(!dislike), setLike(true)}}>
                    { dislike ?
                    <Ionicons style={styles.icon} name="heart-dislike-outline" size={22} color="black"/>
                    :
                    <Ionicons style={styles.icon} name="heart-dislike" size={22} color="red"/>
                    }
                </TouchableWithoutFeedback>
            </View>
            
        </View>
        
    </View>

  );
};

const styles = StyleSheet.create({
    icon: {
        marginBottom: 0,
        marginTop: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    secret: {
        fontSize: 16,
    },
    card: {
        padding: 16,
        flexDirection: 'column',
        margin: 5,
    },

});

export default SecretsList;