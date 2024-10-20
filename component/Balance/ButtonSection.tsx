import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native"; 
// custom components
import RegularButton from "../Buttons/RegularButton";
import { colors } from "../colors";
import { Ionicons } from "@expo/vector-icons"

const ButtonSectionBackground = styled.View`
    width:100%;
    align-items:center;
    flex:1;
`;

const ButtonSection: FunctionComponent = () => {
    return (
			<ButtonSectionBackground>
				<RegularButton btnStyles={{ width: "50%" }} onPress={() => {}}>
					Cancel <Ionicons name="card" size={17} color={colors.white} />
				</RegularButton>
			</ButtonSectionBackground>
		);
}
export default ButtonSection;