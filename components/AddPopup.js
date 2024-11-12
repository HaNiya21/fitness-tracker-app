import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from '../app/styles';

const AddPopup = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Data</Text>

          <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Add Exercise')}>
            <Text style={styles.modalButtonText}>Add Exercise</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Add Water')}>
            <Text style={styles.modalButtonText}>Add Water</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton} onPress={() => console.log('Add Sleep')}>
            <Text style={styles.modalButtonText}>Add Sleep</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



export default AddPopup;
