import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../AtomicComponents/Button.jsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import OTPTextView from '../components/OtpTextInput.jsx';
import { useToast } from 'react-native-toast-notifications';
import { typography } from '../theme/typography.jsx';

const OtpScreen = () => {
  const toast = useToast();
  const [timer, setTimer] = useState(40); // 2 minutes in seconds
  const route = useRoute();
  const { phoneNumber } = route.params;
  // console.log(phoneNumber, "This is Phone number")
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [num, setNum] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const navigation = useNavigation();

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 40);
    const remainingSeconds = seconds % 40;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timer]);
  const getdata = async () => {
    const num = await AsyncStorage.getItem('number');
    const numParsed = JSON.parse(num);
    setNum(numParsed);
  };
  const handleResendOTP = e => {
    setOtp('');
    setTimer(40);

    e.preventDefault();
    toast.show("Success", {
      data: {
        type: 'success',
        message: `Success`,
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      }
    });
  };

  const verifyOtp = () => {
    setTimer(0);
    setErrorMsg('');
    // toast.show('Login Successfully', {
    //   data: {
    //     type: 'success',
    //     message: "Login Successfully",
    //     placement: 'top',
    //     duration: 4000,
    //     animationType: 'slide-in',
    //   }
    // });
  };
  const handleTextChange = text => {
    setOtp(text);
  };
  const handleVerify = () => {
    if (otp.length < 6 || otp.includes('-')) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleEditNumber = () => {
    navigation.goBack();
  };
  const combineFunction = () => {
    handleVerify();
    verifyOtp();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        {/* <EDukaanIcon /> */}
      </View>
      <View>
        <Text style={styles.enterOtp}>Enter OTP</Text>
        <Text style={styles.otpMsg}>
          We have sent you an SMS with the OTP to
          <Text style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {' '}
            {phoneNumber}
          </Text>
          <TouchableOpacity onPress={handleEditNumber}>
            <Text style={styles.spanText}> Edit Number</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <OTPTextView
          inputCount={6}
          handleTextChange={handleTextChange}
          error={error}
          incorrectOtp={errorMsg}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.noOtp}>Do not have OTP? </Text>
          <TouchableOpacity onPress={handleResendOTP} disabled={timer > 0}>
            <Text style={styles.spanText}>
              {timer > 0 ? `Resend OTP in ${formatTime(timer)}` : 'Resend OTP'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
      >
        <Button
          asTouchable
          title="Verify"
          style={otp.length < 6 || otp.includes("-") ? styles.buttonVerifyDisabled : styles.button}
          onPress={combineFunction}
          disabled={otp.length < 6 || otp.includes("-") ? true : false}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </Button>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
          }}>
          
        </View>
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: "space-around",
    paddingVertical: 32,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    width: '100%',
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: "blue"
  },
  logo: {
    width: 158,
    height: 32,
    flexShrink: 0,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  secondaryBtn: {
    backgroundColor: 'white',
    color: '#213578',
    borderColor: '#213578',
    borderWidth: 1,
    borderRadius: 8,
    height: 48
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12,
    backgroundColor: '#213578',
    height: 48,
  },
  buttonVerifyDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12,
    backgroundColor: '#213578',
    opacity: 0.5,
    height: 48,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: '700',
    fontFamily: typography.bold
  },
  otpContainer: {
    height: 120,
    paddingVertical: 16,
    justifyContent: 'space-between',
    // backgroundColor: "red"
  },

  enterOtp: {
    // fontWeight: '700',
    fontSize: 24,
    color: '#000000',
    lineHeight: 32,
    fontFamily: typography.bold
  },
  otpMsg: {
    fontWeight: '500',
    fontSize: 16,
    color: '#949494',
    width: '90%',
    lineHeight: 24,
    fontFamily: typography.bold
  },
  spanText: {
    color: '#02AFF0',
    // fontWeight: '700',
    fontFamily: typography.bold,
    fontSize: 14,
  },
  noOtp: {
    color: '#898989',
    // fontWeight: '700',
    fontSize: 14,
    fontFamily: typography.bold
  },
  password: {
    color: '#213578',
    fontSize: 16,
    fontFamily: typography.bold
  },
});

export default OtpScreen;
