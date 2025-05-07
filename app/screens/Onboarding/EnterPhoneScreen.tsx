/**
 * Enter Phone Screen
 * 
 * TODO: Implement the screen where users enter their phone number
 * for verification.
 * 
 * Requirements:
 * - Create a UI for entering a phone number
 * - Implement phone number validation
 * - Handle submission and potential errors
 * - Navigate to the code verification screen
 */

// Your implementation here

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EnterPhoneScreen() {

    useEffect(() => {
    }, []);

    return (
        <View></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4777A',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 20,
    }
});