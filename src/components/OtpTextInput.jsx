/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48
    },
    textInput: {
        height: 48,
        width: 48,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
        color: '#000000',
        borderWidth: 2,
        borderRadius: 8,
    },
    errorText: {
        color: 'red',
    }
});

const DEFAULT_TINT_COLOR = '#02AFF0';
const DEFAULT_OFF_TINT_COLOR = '#C1C1C1';
const DEFAULT_TEST_ID_PREFIX = 'otp_input_';
const DEFAULT_KEYBOARD_TYPE = 'numeric';
const LIGHT_BLUE_COLOR = '#ADD8E6';
const BLUE_COLOR = '#0000FF';

const OTPTextView = (props) => {
    const {
        defaultValue = '',
        inputCount = 6,
        tintColor = DEFAULT_TINT_COLOR,
        offTintColor = DEFAULT_OFF_TINT_COLOR,
        inputCellLength = 1,
        containerStyle = {},
        textInputStyle = {},
        handleTextChange = () => { },
        keyboardType = DEFAULT_KEYBOARD_TYPE,
        testIDPrefix = DEFAULT_TEST_ID_PREFIX,
        autoFocus = true,
        error = false,
        incorrectOtp = ''
    } = props;

    const [otpText, setOtpText] = useState(Array(inputCount).fill(''));
    const [focusedInput, setFocusedInput] = useState(0);
    const inputs = useRef([]);

    useEffect(() => {
        if (defaultValue) {
            handleChangeText(defaultValue, 0);
        }
    }, [defaultValue]);
    const handleChangeText = (text, index) => {
        const filteredText = text.replace(/\D/g, '').slice(0, inputCount);
        const newOtpText = Array(inputCount).fill('').map((_, i) => filteredText[i] || '');
        
        setOtpText(newOtpText);
        handleTextChange(newOtpText.join(''));
        
        // Move focus to the last non-empty input or the first empty one
        const lastFilledIndex = newOtpText.findLastIndex(digit => digit !== '') + 1;
        focusInput(Math.min(lastFilledIndex, inputCount - 1));
    };



    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace') {
            if (otpText[index] === '' && index > 0) {
                const newOtpText = [...otpText];
                newOtpText[index - 1] = '';
                setOtpText(newOtpText);
                handleTextChange(newOtpText.join(''));
                focusInput(index - 1);
            } else {
                const newOtpText = [...otpText];
                newOtpText[index] = '';
                setOtpText(newOtpText);
                handleTextChange(newOtpText.join(''));
            }
        }
    };

    const focusInput = (index) => {
        if (inputs.current[index]) {
            inputs.current[index].focus();
            setFocusedInput(index);
        }
    };

    const handleFocus = (index) => {
        setFocusedInput(index);
    };

    const handleTextInputChange = (text, index) => {
        const currentOtp = otpText.join('');
        let newText = text;

        if (currentOtp.length + text.length > inputCount) {
            // If pasting or typing would exceed 6 digits, truncate the input
            newText = text.slice(0, inputCount - currentOtp.length);
        }

        handleChangeText(currentOtp + newText, index);
    };
    

    const renderInputs = () => {
        const inputArray = [];

        for (let i = 0; i < inputCount; i++) {
            const _tintColor = Array.isArray(tintColor) ? tintColor[i] : tintColor;
            const _offTintColor = Array.isArray(offTintColor) ? offTintColor[i] : offTintColor;

            inputArray.push(
                <TextInput
                    key={i}
                    ref={(ref) => (inputs.current[i] = ref)}
                    style={[
                        styles.textInput,
                        textInputStyle,
                        {
                            borderColor: focusedInput === i ? _tintColor : _offTintColor,
                            color: i === 0 && otpText[i] === '' ? BLUE_COLOR : '#000000',
                        },
                    ]}
                    value={otpText[i]}
                    onChangeText={(text) => handleTextInputChange(text, i)}
                    onKeyPress={(event) => handleKeyPress(event, i)}
                    onFocus={() => handleFocus(i)}
                    keyboardType={keyboardType}
                    maxLength={inputCount - otpText.join('').length + (otpText[i] ? 1 : 0)}
                    autoFocus={autoFocus && i === 0}
                    selectionColor={LIGHT_BLUE_COLOR}
                    cursorColor={LIGHT_BLUE_COLOR}
                    testID={`${testIDPrefix}${i}`}
                />
            );
        }

        return inputArray;
    };

    return (
        <View>
            <View style={[styles.container, containerStyle]}>{renderInputs()}</View>
            {error && <Text style={styles.errorText}>Enter correct OTP</Text>}
            {!error && incorrectOtp !== '' && <Text style={styles.errorText}>{incorrectOtp}</Text>}
        </View>
    );
};

export default OTPTextView;