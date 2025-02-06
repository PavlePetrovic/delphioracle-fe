import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import ChatHistory from "./components/ChatHistory";
import { messageType } from "@appTypes/universal";

const PDFChatHistory = ({ messages }: { messages: messageType[] }) => {
  Font.register({
    family: "Mulish",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexc1RwaClGrw-PTY.ttf",
        fontStyle: "normal",
        fontWeight: "light",
      },
      {
        src: "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNRwaClGrw-PTY.ttf",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      {
        src: "https://fonts.gstatic.com/s/mulish/v13/1Ptyg83HX_SGhgqO0yLcmjzUAuWexaFRwaClGrw-PTY.ttf",
        fontStyle: "normal",
        fontWeight: "medium",
      },
    ],
  });

  Font.register({
    family: "Philosopher",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/philosopher/v20/vEFV2_5QCwIS4_Dhez5jcVBpRUwU08qe.ttf",
        fontStyle: "normal",
        fontWeight: "normal",
      },
    ],
  });

  const styles = StyleSheet.create({
    page: {
      width: 997,
      fontFamily: "Mulish",
      backgroundColor: "#0D101A",
    },
    sectionWrapper: {
      display: "flex",
      flexDirection: "column",
      paddingHorizontal: 30,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.sectionWrapper}>
          <ChatHistory messages={messages} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFChatHistory;
