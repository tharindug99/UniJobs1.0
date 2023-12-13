import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export class OptionsSelection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRole: null,
      selectedJob: null,
    };
  }

  handleRolePress = (role) => {
    this.setState((prevState) => {
      // Unselect the other role if it was selected
      const newSelectedRole = prevState.selectedRole === role ? null : role;
      return {
        selectedRole: newSelectedRole,
        // If the selected role is Employer, unselect Undergraduate (and vice versa)
        selectedJob: newSelectedRole === 'Employer' ? null : prevState.selectedJob,
      };
    });
  };

  handleJobPress = (job) => {
    this.setState({ selectedJob: job === this.state.selectedJob ? null : job });
  };

  render() {
    const { navigation } = this.props;
    return (
      
      <View style={styles.container}>
        <Text style={styles.heading}>I'm an</Text>

        <View style={styles.RoleContainer}>
          <TouchableOpacity style={[
              styles.optionBtn,
              {
                backgroundColor:
                  this.state.selectedRole === 'Undergraduate' ? '#019F99' : '#fff',
              },
            ]}
            onPress={() => this.handleRolePress('Undergraduate')}>
            <Text style={[
                styles.optionText,
                {
                  color: this.state.selectedRole === 'Undergraduate' ? '#fff' : '#019F99',
                },
              ]}>Undergraduate</Text>
          </TouchableOpacity>



          <TouchableOpacity style={[
              styles.optionBtn,
              {
                backgroundColor: this.state.selectedRole === 'Employer' ? '#019F99' : '#fff',
              },
            ]}
            onPress={() => this.handleRolePress('Employer')}
            >
            <Text style={[
                styles.optionText,
                {
                  color: this.state.selectedRole === 'Employer' ? '#fff' : '#019F99',
                },
              ]}>Employer</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>I'm looking for/hiring in</Text>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Translator</Text>
          </TouchableOpacity>
          
          
          
        </View>
        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Data Entry Operator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Typist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Graphic Designer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Video Editor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.OptionContainer}>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Private Tutoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionText}>Other</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Job Roles</Text>
        
        <View style={styles.nextbtn}>
          
          <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('LogIn')}>
            <Text style={{color:'#fff', fontSize:20}}>Next</Text>
            <Image source={require('../assets/icons/right.png')} style={{width:20, height:20, marginLeft:30, marginTop:6 }} />
          </TouchableOpacity>
        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'left',
  },
  RoleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  OptionContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    
    
  },
  optionBtn: {
    flex: 1, // This ensures equal distribution of space
    paddingHorizontal: 15,
    margin:2,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#019F99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#019F99',
  },
  footer:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    paddingRight:20,
    textAlign: 'right',
  },
  nextbtn: {
    width: 160,
    height: 60,
    backgroundColor: '#000',
    alignSelf: 'flex-end', // or marginLeft: 'auto'
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:15,
    flexDirection:'row'
  },
});

export default OptionsSelection;
