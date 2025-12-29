import { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

interface LivestreamWidgetProps {
  eventName?: string;
  roomID?: string;
  userName?: string;
  isHost?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function LivestreamWidget({
  roomID = "public-live-room",
  userName,
  isHost = false,
  width = "100%",
  height = "600px",
  className = "",
}: LivestreamWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    if (!appID || !serverSecret) {
      console.error("ZegoCloud env vars missing");
      return;
    }

    const userID = "user_" + Math.floor(Math.random() * 100000);
    const finalUserName = userName || `Guest_${userID}`;

    // ⚠️ Test token (NO backend)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      finalUserName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role: isHost
            ? ZegoUIKitPrebuilt.Host
            : ZegoUIKitPrebuilt.Audience,
        },
      },
      turnOnCameraWhenJoining: isHost,
      turnOnMicrophoneWhenJoining: isHost,
      showPreJoinView: false,
    });

    return () => {
      zp.destroy();
    };
  }, [roomID, userName, isHost]);

  return (
    <div
      ref={containerRef}
      className={`rounded-lg overflow-hidden border border-primary-purple ${className}`}
      style={{ width, height }}
    />
  );
}
