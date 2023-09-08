import { useRef, useState, useEffect } from 'react';
import {StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
export default function AppAnimatedTyping({onComplete,data,penColor=colors.primary,others}) {
    let [text, setText] = useState("");
    let [done,setDone] = useState(false);
    let [cursorColor, setCursorColor] = useState("transparent");
    let [messageIndex, setMessageIndex] = useState(0);
    let [textIndex, setTextIndex] = useState(0);
    let [timeouts, setTimeouts] = useState({
        cursorTimeout: null,
        typingTimeout: null,
        firstNewLineTimeout: null,
        secondNewLineTimeout: null,
    });

    let textRef = useRef(text);
    textRef.current = text;

    let cursorColorRef = useRef(cursorColor);
    cursorColorRef.current = cursorColor;

    let messageIndexRef = useRef(messageIndex);
    messageIndexRef.current = messageIndex;

    let textIndexRef = useRef(textIndex);
    textIndexRef.current = textIndex;

    let timeoutsRef = useRef(timeouts);
    timeoutsRef.current = timeouts;

    let typingAnimation = () => {
        if (textIndexRef.current < data[messageIndexRef.current].length) {
            setText(textRef.current + data[messageIndexRef.current].charAt(textIndexRef.current));
            setTextIndex(textIndexRef.current + 1);

            let updatedTimeouts = { ...timeoutsRef.current };
            updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 200);
            setTimeouts(updatedTimeouts);
        } else if (messageIndexRef.current + 1 < data.length) {
            setMessageIndex(messageIndexRef.current + 1);
            setTextIndex(0);

            let updatedTimeouts = {...timeoutsRef.current};
            updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 120);
            updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 200);
            updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 280);
            setTimeouts(updatedTimeouts);
        } else {
            clearInterval(timeoutsRef.current.cursorTimeout);
            // setCursorColor("transparent");

            if (onComplete) {
                onComplete();
            }
        }
    };

    let newLineAnimation = () => {
        setText(textRef.current + "\n");
    };

    let cursorAnimation = () => {
        if (cursorColorRef.current === "transparent") {
            setCursorColor(penColor);
        } else {
            // setCursorColor("transparent");
        }
    };

    useEffect(() => {
        // setInterval(function(){
        
            run();

        // },5000);
    }, []);
    const run=()=>{
        let updatedTimeouts = { ...timeoutsRef.current };
        updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
        updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
        setTimeouts(updatedTimeouts);

        return () => {
            clearTimeout(timeoutsRef.current.typingTimeout);
            clearTimeout(timeoutsRef.current.firstNewLineTimeout);
            clearTimeout(timeoutsRef.current.secondNewLineTimeout);
            clearInterval(timeoutsRef.current.cursorTimeout);
        };
    }
    return (
        <Text style={[text,{...others}]}>
            {text}
            <Ionicons name="pencil" size={35} color={penColor} />
            
        </Text>
    )
};

let styles = StyleSheet.create({
    text: {
        color: "#B76D68",
        fontSize: 30,
        // alignSelf: "stretch"
    }
})