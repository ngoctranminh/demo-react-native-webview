import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { WebView } from 'react-native-webview';
import html from './html';

const INJECTED_JAVASCRIPT = ``;
const App = () => {
  // const PolicyHTML = require('../index.html');
  const [message, setMessage] = useState()
  const onLoadEnd = () => {
    console.log('onLoadEnd')
  }
  const refWebview = useRef(null);
  const listenToWebviewSignal = (e) => {
    let contentData = e.nativeEvent.data;
    let commands = contentData.split('|');
    if (commands?.[0]) {
      setMessage(JSON.parse(commands[0]))
      console.log('commends[1]', JSON.parse(commands[0]))
    }
  }
  console.log('message', message)
  const onPostmessgae = () => {
    refWebview.current.postMessage("message", JSON.stringify("Gui token"))
  }
  return (
    <View style={{ flex: 1, backgroundColor: message?.[0]?.color ? message[0].color : 'white' }}>
      {
        message?.[0]
          ? <Text>{message[0]?.message}</Text>
          : null
      }
      <TouchableOpacity style={{
        paddingVertical: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1,
        margin: 10
      }} onPress={onPostmessgae}>
        <Text>SEN TOKEN</Text>
      </TouchableOpacity>
      <WebView
        ref={refWebview}
        style={{ flex: 1 }}
        onLoadEnd={onLoadEnd}
        onError={() => {
          console.log('onError')
        }}
        javaScriptEnabled={true}
        onMessage={listenToWebviewSignal}
        source={{ uri: 'http://172.18.163.169:5500/index.html' }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    </View>

  )
}

export default App

const styles = StyleSheet.create({})