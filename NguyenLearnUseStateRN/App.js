import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const App = () => {
  /**
   * Giá trị ban đầu: useState(0): 0
   * value: Giá trị hiện tại;
   * setValue: Thay đổi giá trị / Cập nhật giá trị;
   */
  const [value, setvalue] = useState(0)

  //Giá trị tăng:
  const ValueUp = ()=>{
    //Khi nhấn vào Button thì hàm setValue sẽ value + 100:
    setvalue(value+100)
  }
  //Giá trị giảm:
  const ValueDown = ()=>{
    //Khi nhấn vào Button thì hàm setValue sẽ value - 100:
    setvalue(value- 100)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>
        {/* Thay số 0 bằng 'value' */}
        {/* Value: 0 */}
        {'Value is: '+value}
      </Text>
      <Button
        //Khi nhấn vào Button là thay đổi giá trị: 
        onPress={ValueUp}
        title='Value Up'
      />
      <Button
        //Khi nhấn vào Button là thay đổi giá trị: 
        onPress={ValueDown}
        title='ValueDown'
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  valueText:{
    color:'red',
    fontSize:40
  }
})