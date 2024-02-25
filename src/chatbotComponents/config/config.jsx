import { createChatBotMessage } from "react-chatbot-kit";
import ChatbotAvatar from "../Chatbot/ChatbotAvatar";
// Import the widget components
// import EventsWidget from '../Widget/EventsWidget'; // Adjust the path as necessary
// import UpcomingEventsWidget from '../widget/UpcomingEventsWidget'; // Adjust the path as necessary
// import PaymentsWidget from '../widget/PaymentsWidget'; // Adjust the path as necessary
import OptionsWidget from "../Widget/OptionsWidget";
import EventsWidget from "../Widget/EventsWidget";
import UpcomingEventsWidget from "../Widget/UpcomingEventsWidget";
// import ActionProvider from "../utils/ActionProvider"

const botAvatarImage =
  "https://i.postimg.cc/zDLLW8xP/cartoon-style-robot-vectorart-78370-4103.jpg";
const userAvatarImage =
  "https://i.postimg.cc/tJRxQx3q/isolated-young-handsome-man-different-poses-white-background-illustration-632498-859.jpg";

const config = {
  initialMessages: [
    createChatBotMessage("Hello! Welcome Here. How can I assist you?", {
      delay: 500,
      widget: "optionsWidget",
    }),
  ],
  botName: "EventMate",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#d4723d",
    },
  },
  customComponents: {
    botAvatar: (props) => (
      <ChatbotAvatar {...props} src={botAvatarImage} alt="Bot" />
    ),
    userAvatar: (props) => (
      <ChatbotAvatar {...props} src={userAvatarImage} alt="User" />
    ),
  },
  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <OptionsWidget {...props} />,
    },
    {
      widgetName: "eventsWidget",
      widgetFunc: (props) => <EventsWidget {...props} data={{ events: [{ title: "Tech Expo 2024" }, { title: "Art and Culture Festival" },{ title: "Music Fest Extravaganza" },{ title: "Entrepreneurship Summit" },{ title: "Science and Discovery Expo" }] }} />,
    },
    {
      widgetName: 'upcomingEventsWidget',
      widgetFunc: (props) => <UpcomingEventsWidget {...props} data={{
        events: [
          { title: "Film Buff Movie Marathon", date: "March 3, 2024" },
          
        ]
      }} />,
    }
    // {
    //   widgetName: 'paymentsWidget',
    //   widgetFunc: (props) => <PaymentsWidget {...props} />,
    // },
  ],
};

export default config;
