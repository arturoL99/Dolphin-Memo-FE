import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NewGamePage from "./pages/NewGamePage/NewGamePage";
import ActiveGamesPage from "./pages/ActiveGamesPage/ActiveGamesPage";
import MemoryPage from "./pages/MemoryPage/MemoryPage";
import { socket, SocketContext } from "./context/Socket";
import GameContextProvider from "./context/GameContextProvider";
import InvitationMailPage from "./pages/InvitationMailPage/InvitationMailPage";

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <GameContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/newGame" element={<NewGamePage />} />
          <Route path="/games" element={<ActiveGamesPage />} />
          <Route path="/memory/:gameId/:userId" element={<MemoryPage />} />
          <Route path="/games/:gameId" element={<InvitationMailPage />} />
        </Routes>
      </GameContextProvider>
    </SocketContext.Provider>
  );
};

export default App;
