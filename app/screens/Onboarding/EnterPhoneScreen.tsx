import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Input, Paragraph, Text, View, YStack, XStack, Theme } from 'tamagui'

const EnterPhoneScreen = () => {
    return (
        <Theme name="dark">
            <SafeAreaView style={{ flex: 1, backgroundColor: '#011627' }}>
                <YStack flex={1} justifyContent="space-between" padding="$space.-sm">

                    {/* Back Button */}
                    <XStack alignItems="center">
                        <Text fontSize="$6" color="$color">&lt;</Text>
                    </XStack>

                    {/* Content */}
                    <YStack padding="$space.-sm" alignItems="center" marginTop="$space.-sm">
                        <Text fontSize="$6" fontWeight="600" color="white">
                            What's Your #?
                        </Text>

                        {/* Phone Number */}
                        <Text fontSize="$8" fontWeight="600" color="white">
                            +1 <Text color="#778899">(512)</Text> 777-7777
                        </Text>

                        {/* Confirm Button */}
                        <Button
                            backgroundColor="#007AFF"
                            borderRadius={12}
                            size="$md"
                            width={200}
                        >
                            Confirm
                        </Button>
                    </YStack>

                    {/* Footer */}
                    <Paragraph textAlign="center" fontSize="$2" color="gray">
                        By tapping on “Confirm” you agree to the Y’all
                        <Text color="#60A5FA"> Terms of Service </Text>
                        and
                        <Text color="#60A5FA"> Privacy Policy</Text>, and consent to receiving text messages from us. Message and data rates apply.
                    </Paragraph>
                </YStack>
            </SafeAreaView>
        </Theme>
    )
}

export default EnterPhoneScreen