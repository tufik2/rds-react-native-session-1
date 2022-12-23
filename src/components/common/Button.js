import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropsType from "prop-types";

export function Button(props){
	return (
		<TouchableOpacity style={[ButtonStyle.button, props.style]} onPress={props.callBack}>
			<Text style={ButtonStyle.text}>{props.text}</Text>
		</TouchableOpacity>
	)
}

Button.propTypes = {text:PropsType.string, callBack:PropsType.func, style:PropsType.any}
Button.defaultProps = {text:"Button", callBack:null, style:null}

export const ButtonStyle = StyleSheet.create({
	button: {
		backgroundColor:'#F00',
		borderRadius:5,
		padding:20,
	},
	text:{color:"#FFF"}
});
