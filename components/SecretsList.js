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

        <View style={{flexDirection: 'column', flex: 2}}>

            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>

            <View>
                <Text style={styles.secret}>{item.secret}</Text>
            </View>

        </View>
        
        <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 16}}>

            <TouchableWithoutFeedback onPress={() => {setLike(!like), setDislike(true)}}>
                { like ?
                <Ionicons style={styles.icon} name="heart-outline" size={20} color="black"/>
                :
                <Ionicons style={styles.icon} name="heart" size={20} color="red"/>
                }
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {setDislike(!dislike), setLike(true)}}>
                { dislike ?
                <Ionicons style={styles.icon} name="heart-dislike-outline" size={20} color="black"/>
                :
                <Ionicons style={styles.icon} name="heart-dislike" size={20} color="red"/>
                }
            </TouchableWithoutFeedback>
            
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
        flexDirection: 'row',
        margin: 2
    },

});

export default SecretsList;