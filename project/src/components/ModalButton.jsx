import React, { useState } from 'react';
import { Alert, Modal, StyleSheet,
Text, Pressable, TouchableOpacity,
View
} from 'react-native';

import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import modal from '../styles/Modal';

import PopupModal from '../components/PopupModal';

const ModalButton = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={modal.centeredView}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={modal.centeredView}>
            <View style={modal.modalView}>
              <Text style={modal.modalText}>Hello World!</Text>
              <Pressable
                style={[modal.button, modal.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={modal.textStyle}>닫기</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
      <PopupModal />
      <Pressable style={button.buttonBox_yellow} onPress={() => setModalVisible(true)}>
        <Text style={text.buttonText_small}>{props.content}</Text>
      </Pressable>
    </View>
  );
};

export default ModalButton;