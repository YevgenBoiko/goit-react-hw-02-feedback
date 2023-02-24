import Feedback from './FeedbackSection/Feedback/Feedback';
import GlobalStyle from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Feedback initialValue={0} />
      <GlobalStyle />
    </div>
  );
};
