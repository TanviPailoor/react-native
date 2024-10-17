import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

// custom component
import { colors } from "../component/colors";
import { Container } from "../component/shared";
import CardSection from "../component/Cards/CardSection";
import logo1 from "../assets/card/card1.jpg";
import logo2 from "../assets/card/card2.jpg";

const HomeContainer = styled(Container)`
    background-color:${colors.graylight};
    width:100%;
    flex:1;
`;

const Home: FunctionComponent = () => {
    const cardData = [
			{
				id: 1,
				accountNo: "293845230587",
				balance: 49857.934,
                alias: "Work Debit",
                logo:logo1,
			},
			{
				id: 2,
				accountNo: "2345343430587",
				balance: 497.934,
                alias: "Personal Prepaid",
                logo:logo1,
			},
			{
				id: 3,
				accountNo: "2937632323287",
				balance: 4434457.934,
                alias: "School Prepaid",
                logo:logo2,
			},
		];
    return (
        <>
            <HomeContainer>
                <StatusBar style="dark" />
                <CardSection data={cardData} />
            </HomeContainer>
        </>
    );
};
export default Home;