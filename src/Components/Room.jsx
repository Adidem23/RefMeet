import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const { roomID } = useParams();

    const mymeeting = async (element) => {
        const appId = "";
        const serverSecret = "";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomID, Date.now().toString(), "Enter Your Name");

        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: "Copy Link",
                url: `https://refmemeet.vercel.app//room/${roomID}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },

        })
    }

    return (
        <div><div ref={mymeeting} /></div>
    )
}

export default Room
