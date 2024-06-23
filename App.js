import { Provider } from "react-redux";
import Main from "./Main";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51Nx4DQSCrxrjDvW6uHNEvtiqeitV0fcFwempa67riaX9l7zRAuFMxxaJOEhALikY2R61ZHHJOgnuMLGBW2Dvs2hn00MiC2zJz9";

const App = () => {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="https://prince-sharma-3000.onrender.com/"
      publishableKey={stripeKey}>
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
};

export default App;
