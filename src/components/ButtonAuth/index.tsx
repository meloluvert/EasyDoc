import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { btnAuthStyle } from './styles.ts'
import React from 'react'
export interface IBInterface extends TouchableOpacityProps {
    OnPressI: () => void
    title: string
    type: 'primary' | 'secondary'
}
export function ButtonInterface({ onPressI, title, type, ...rest }: IBInterface) {
    return (
        <TouchableOpacity style={
            type == "primary" ? btnAuthStyle.btnprimary : btnAuthStyle.btnsecondary 
        }
            onPress={onPressI}
            {...rest}
        >
            <Text style={btnAuthStyle.text}>{title}</Text>
        </TouchableOpacity>
    )
}