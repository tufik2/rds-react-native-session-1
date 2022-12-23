import {Button} from "./Button";
import {View} from "react-native";
import {CuppaStorage} from "../../libs/CuppaStorage";
import {Storages} from "../../controllers/Sotrages";

export function Menu(){
	function onSection(value){
		CuppaStorage.setData({...Storages.section, data:value}).then();
	}

	return (
		<View style={{flexDirection:'row', padding:20}}>
			<Button text={`Home `} style={{marginRight:10}} callBack={()=>onSection('home')}></Button>
			<Button text={"About"} callBack={()=>onSection('about')} ></Button>
		</View>
	)
}
