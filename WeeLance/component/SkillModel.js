import { useState } from "react";
import { MaterialCommunityIcons,Entypo ,AntDesign,FontAwesome5} from "@expo/vector-icons";

import React from "react";
import {  IconButton,Select,CheckIcon, Icon, Button, Modal, Stack,Text, FormControl, Input, Center, NativeBaseProvider } from "native-base";
let  SkillModel = () => {
  const [service, setService] = React.useState("")
    const [placement, setPlacement] = useState(undefined);
    const [open, setOpen] = useState(false);
  
    const openModal = placement => {
      setOpen(true);
      setPlacement(placement);
    };
  
    return <>
        <Stack direction={{
        base: "column",
        md: "row"
      }} >
        <IconButton   icon={   <MaterialCommunityIcons size={18} color={'#F14E24' } name='pencil'/>
}  onPress={() => openModal("right")}>Right</IconButton>
          
        </Stack>
        <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
          <Modal.Content maxWidth="380" {...styles[placement]}>
            <Modal.CloseButton />
            <Modal.Header><Center><Text color={'#F14E24'} >Choose your skills</Text></Center></Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>skills</FormControl.Label>
                <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
              </FormControl>
             
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setOpen(false);
              }}>
                  Cancel
                </Button>
                <Button  
                backgroundColor={'#F14E24'}
                onPress={() => {
                setOpen(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>;
  };
  
  const styles = {
    top: {
      marginBottom: "auto",
      marginTop: 0
    },
    bottom: {
      marginBottom: 0,
      marginTop: "auto"
    },
    left: {
      marginLeft: 0,
      marginRight: "auto"
    },
    right: {
     
    },
    center: {
       
    }
  };

  export default SkillModel ;