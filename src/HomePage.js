import React  from 'react';
import {
    View,
    Button
} from 'react-native';


export default HomePage = ({navigation}) => {
    return (
        <View>
            <Button testID="createProgramButton" title="Create Program Button" onPress={() => navigation.navigate("ProgramForm")}></Button>
        </View>
    )
}