import { View, Text, Image } from "@react-pdf/renderer";
import { messageType } from "@appTypes/universal";
import delphiLogo from "@assets/icons/delphi-logo-horizontal-text.png";
import { markdownToText } from "@/common/utility/Utils";

const ChatHistory = ({ messages }: { messages: messageType[] }) => {
  const borderRadius = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        marginTop: 15,
      }}
    >
      <View
        style={{
          marginRight: "auto",
          marginBottom: 15,
        }}
      >
        <Image
          src={delphiLogo}
          style={{
            width: 120,
            height: "auto",
          }}
        />
      </View>
      {messages &&
        messages.map((message, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems:
                    message.from.toUpperCase() === "BOT"
                      ? "flex-start"
                      : "flex-end",
                  alignSelf:
                    message.from.toUpperCase() === "BOT"
                      ? "flex-start"
                      : "flex-end",
                  width: "100%",
                  gap: 4,
                  backgroundColor: "#e0efff11",
                  padding: 10,
                  ...borderRadius,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 12,
                    color:
                      message.from.toUpperCase() === "BOT"
                        ? "#d5d5d5"
                        : "#EBD9AD",
                  }}
                >
                  {message.from.toUpperCase() === "BOT"
                    ? "Delphi Oracle"
                    : "You"}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "#d5d5d5",
                  }}
                >
                  {markdownToText(message.message)}
                </Text>
              </View>
              {messages.length !== index + 1 && (
                <View
                  style={{
                    width: "100%",
                    height: "1",
                    marginVertical: 6,
                    backgroundColor: "transparent",
                  }}
                ></View>
              )}
            </View>
          );
        })}
    </View>
  );
};

export default ChatHistory;
