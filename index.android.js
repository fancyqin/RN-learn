import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    View,
    ListView,
    Keyboard,
    TouchableOpacity
} from 'react-native';
// import Bananas from './src/Bananas';


// class TodoItem extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//             items: []
//         }
//         this.handleRemoveItem = this.handleRemoveItem.bind(this);
//     }
//     handleRemoveItem(key) {
//         if(this.state.items.length === 0) return;
//         let newItems = this.state.items.filter((item) => {
//             return item.key !== key
//         })
//         this.setState({
//             items: newItems,
//             value: ''
//         })
//     }
//     render(item){
//         return(
//             <View style={styles.item}>
//                 <Text id={item.key} style={styles.itemText}>{item.text}</Text>
//                 <TouchableOpacity><Text style={styles.del}>X</Text></TouchableOpacity>
//             </View>
//         )
//     }
// }

class RNtest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    handleAddItem() {
        if(!this.state.value) return;
        const newItems = [
            ...this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
                complete: false
            }
        ]
        this.setState({
            items: newItems,
            value: ''
        })
    }
    handleRemoveItem(key) {
        if(this.state.items.length === 0) return;
        let newItems = this.state.items.filter((item) => {
            return item.key !== key
        })
        this.setState({
            items: newItems,
            value: ''
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.top}>TODO LIST</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.value}
                        placeholder="What You Gonna Do?"
                        onChangeText={(value) => this.setState({value})}
                        onSubmitEditing={this.handleAddItem}
                    />
                <FlatList
                    style={styles.list}
                    data={this.state.items}
                    renderItem={({item}) => 
                    <View style={styles.item}>
                        <Text id={item.key} style={styles.itemText}>{item.text}</Text>
                        <TouchableOpacity><Text style={styles.del}>X</Text></TouchableOpacity>
                    </View>
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top:{
        margin: 0,
        fontSize: 24,
        color:'#ea6f5a',
        textAlign: 'center',
        fontWeight:'bold'
    },
    input:{
        width:'100%',
        height:40,
        padding:10
    },
    container: {
        flex: 1,
        width:'100%',
        padding:20,
        backgroundColor: '#F5FCFF',
    },
    list:{
        padding:10
    },
    item:{
        flex:1,
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingTop: 10
    },
    del:{
        flex: 1,
        width: 20,
        color:'#f00'
    }
});

AppRegistry.registerComponent('RNtest', () => RNtest);
