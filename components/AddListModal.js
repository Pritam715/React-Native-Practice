import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import colors from "../Colors";
import tempData from '../tempData';


export default class AddListModal extends React.Component{
   backgroundColors=["#5CD859","#24A6D9","#5958D9","#8822D9","#D159D8","#D85963","#D88559"];
     state={
         name:"",
         color:this.backgroundColors[0],
        
     };
      

     createTodo=()=>{
        const {name,color}=this.state;
      const list={name,color};
      this.props.addList(list);
      
        this.setState({name:""});
        this.props.closeModal();
     };




     renderColors()
     {
         return this.backgroundColors.map(color=>{
             return(
                 <TouchableOpacity
                  key={color}
                  style={[styles.colorSelect,{backgroundColor:color}]}
                  onPress={()=>this.setState({color})}/>
             );
         });
     };
    render()
    {
        return(
         <SafeAreaView style={styles.container} behavior="padding">
             <TouchableOpacity style={{position:"absolute",top:64,right:32}} onPress={this.props.closeModal}>
                   <Icon name="close" size={24} color={colors.black}></Icon>
             </TouchableOpacity>

              <View style={{alignSelf:"stretch",marginHorizontal:32}}>
                   <Text style={styles.title}>Create Todo List</Text>
                   <TextInput style={styles.input} placeholder="List Name ?" onChangeText={(text)=>this.setState({name:text})}/>
                   

                   <View style={{flexDirection:"row" ,justifyContent:"space-between",marginTop:20}}>{this.renderColors()}</View>

                   <TouchableOpacity style={[styles.create,{backgroundColor:this.state.color}]} onPress={this.createTodo}>
                       <Text style={{color:colors.white,fontWeight:"600"}}>Create!</Text>
                      
                   </TouchableOpacity>
              </View>

         </SafeAreaView>
        );
    } 
};
const styles=StyleSheet.create({
   container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"lightblue"
   },
   title:{
       fontSize:28,
       fontWeight:"800",
       color:colors.black,
       alignSelf:"center",
   },
   input:{
       borderWidth:StyleSheet.hairlineWidth,
       borderColor:colors.blue,
       borderRadius:6,
       height:50,
       marginTop:8,
       paddingHorizontal:16,
       fontSize:18,
   },
   create: {
       marginTop:24,
       height:50,
       borderRadius:6,
       alignItems:"center",
       justifyContent:"center",

     
   },
   colorSelect:{
       width:38,
       height:30,
       borderRadius:4
   }
});