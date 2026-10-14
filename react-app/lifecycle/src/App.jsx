import EffectCounter from "./Components/EffectCounter";
import UserPreview from "./Components/UserPreview";
import Users from "./Components/Users";
function App() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-0">
        <EffectCounter />
        <UserPreview userId={2} />
        <Users />
      </div>
    </main>
  );
}

export default App;
