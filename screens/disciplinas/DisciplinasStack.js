import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplinas from './Disciplinas';
import DisciplinasForms from './DisciplinasForms';

const Stack = createNativeStackNavigator();
const DisciplinasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'disciplinas' }} />
                <Stack.Screen name="disciplinas-form" component={DisciplinasForms} options={{ title: 'disciplinas-forms' }} />
            </Stack.Navigator>
        </>
    )
}

export default DisciplinasStack