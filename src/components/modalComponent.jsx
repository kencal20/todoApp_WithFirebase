import { View, Text, Modal } from 'react-native'
import React from 'react'

export default function ModalComponent({visible,onRequestClose,children}) {
  return (
<Modal
visible={visible}
onRequestClose={onRequestClose}
>
    {children}

</Modal>
  )
}