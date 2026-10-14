import EffectCounter from "./Components/EffectCounter";
import UserPreview from "./Components/UserPreview";
function App() {
  return (
    <>
      <EffectCounter />
      <UserPreview userId={2} />
    </>
  );
}

export default App;
