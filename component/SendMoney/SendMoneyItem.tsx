import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ScreenWidth } from "../shared";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import Profile from "../Header/Profile";


const SendMoneyItemContainer = styled.TouchableHighlight`
    height:130px;
    width:${ScreenWidth * 0.27}px;
    padding:10px;
    border-radius:15px;
    justify-content:space-around;
    margin:0px 10px 10px 0px;
`;

// types
import { SendMoneyProps } from "./types";
const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
			<SendMoneyItemContainer
				underlayColor={colors.secondary}
				style={{ backgroundColor: props.background }}
				onPress={() => {
					alert("Send Money!");
				}}
			>
				<>
					<Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />
					<SmallText
						textStyles={{
							textAlign: "left",
							color: colors.white,
							fontSize: 12,
						}}
					>
						{props.name}
					</SmallText>
					<RegularText
						textStyles={{
							textAlign: "left",
							color: colors.white,
							fontSize: 13,
						}}
					>
						{props.amount}
					</RegularText>
				</>
			</SendMoneyItemContainer>
		);
}

export default SendMoneyItem