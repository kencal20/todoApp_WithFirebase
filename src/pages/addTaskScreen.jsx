import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ModalComponent from '../components/modalComponent';

export default function AddTaskScreen({ isModalOpen, onToggleModal, handleAddItem }) {
    const [taskInput, setTaskInput] = useState({
        title: ''
    });
    
    function handleInputChange(key,input){
        setTaskInput(prev=> ({...prev,[key]:input}));
    }

    const addItem = () => {
        handleAddItem(taskInput.title);
        setTaskInput('');  
    }

    return (
        <ModalComponent
            visible={isModalOpen}
            onRequestClose={onToggleModal}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(input)=> handleInputChange('title', input)}
                    value={taskInput.title}
                    placeholder="Enter task"
                />
                <Button title="Add Task" onPress={addItem} />
           
            </View>
        </ModalComponent>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 20,
    }
});
