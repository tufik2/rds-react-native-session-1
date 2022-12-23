import {View, TouchableOpacity, Text} from 'react-native'
import {AppStyles} from "./AppStyles";
import {Home} from "./components/home/Home";
import {useState} from "react";
import {About} from "./components/about/About";
import {Menu} from "./components/common/Menu";
import {CuppaStorage, GetStorage} from "./libs/CuppaStorage";
import {Storages} from "./controllers/Sotrages";

export function Main(){
	const [section, setSection] = useState(Storages.section.defaultValue);

	return (
		<View style={{flex:1}}>
			<GetStorage {...Storages.section} callback={setSection} />
			<Menu />
			<View style={[AppStyles.wire, {flex:1}]}>
				{section === 'home' ? (
					<Home />
				) : (section === 'about') ? (
					<About />
				) : (
					null
				)}
			</View>
		</View>
	)
}
