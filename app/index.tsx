import React, { useState } from "react";
import Row from "@/components/Row";
import Button from "@/components/Button";
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Platform } from "react-native";
import { handleCalculatorLogic } from "../util/calculator";

export default function Index() {
	const [state, setState] = useState({
		currentValue: "0",
		operator: null,
		previousValue: null,
	});

	const onPressHandler = (type, value) => {
		handleCalculatorLogic(state, setState, type, value);
	};

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={[styles.container, { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }]}>
				<View style={styles.content}>
					<View style={{
						display: 'flex',
						flexWrap: 'wrap',
						flexDirection: 'row-reverse',
						marginBottom: 10,
						marginRight: 20,
						alignItems: 'center'
					}}>
						<Text style={styles.valueBig}>{state.currentValue === "0" ? 0 : state.currentValue}</Text>
						<Text style={styles.valueBig}>{state.operator === null ? "" : state.operator}</Text>
						<Text style={styles.valueBig}>{state.previousValue === null ? "" : state.previousValue}</Text>
					</View>
					<Row>
						<Button
							text="C"
							theme="secondary"
							onPress={() => onPressHandler("clear")}
						></Button>
						<Button
							text="+/-"
							theme="secondary"
							onPress={() => onPressHandler("posneg")}
						></Button>
						<Button
							text="%"
							theme="secondary"
							onPress={() => onPressHandler("percentage")}
						></Button>
						<Button
							text="/"
							theme="accent"
							onPress={() => onPressHandler("operator", "/")}
						></Button>
					</Row>
					<Row>
						<Button
							text="7"
							theme="secondary"
							onPress={() => onPressHandler("number", "7")}
						></Button>
						<Button
							text="8"
							theme="secondary"
							onPress={() => onPressHandler("number", "8")}
						></Button>
						<Button
							text="9"
							theme="secondary"
							onPress={() => onPressHandler("number", "9")}
						></Button>
						<Button
							text="X"
							theme="accent"
							onPress={() => onPressHandler("operator", "*")}
						></Button>
					</Row>
					<Row>
						<Button
							text="4"
							theme="secondary"
							onPress={() => onPressHandler("number", "4")}
						></Button>
						<Button
							text="5"
							theme="secondary"
							onPress={() => onPressHandler("number", "5")}
						></Button>
						<Button
							text="6"
							theme="secondary"
							onPress={() => onPressHandler("number", "6")}
						></Button>
						<Button
							text="-"
							theme="accent"
							onPress={() => onPressHandler("operator", "-")}
						></Button>
					</Row>
					<Row>
						<Button
							text="1"
							theme="secondary"
							onPress={() => onPressHandler("number", "1")}
						></Button>
						<Button
							text="2"
							theme="secondary"
							onPress={() => onPressHandler("number", "2")}
						></Button>
						<Button
							text="3"
							theme="secondary"
							onPress={() => onPressHandler("number", "3")}
						></Button>
						<Button
							text="+"
							theme="accent"
							onPress={() => onPressHandler("operator", "+")}
						></Button>
					</Row>
					<Row>
						<Button
							text="0"
							theme="secondary"
							size="double"
							onPress={() => onPressHandler("number", "0")}
						></Button>
						<Button
							text="."
							theme="secondary"
							onPress={() => onPressHandler("number", ".")}
						></Button>
						<Button
							text="="
							theme="accent"
							onPress={() => onPressHandler("equal")}
						></Button>
					</Row>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	value: {
		color: "#000",
		fontSize: 40,
		textAlign: "right",
		marginRight: 20,
		marginBottom: 10,
	},
	content: {
		marginTop: 'auto',
		paddingVertical: 50,
		paddingHorizontal: 10,
	},
	valueBig: {
		fontSize: 40
	}
});
