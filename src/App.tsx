import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import CreateAd from "./pages/CreateAd";
import TextAd from "./pages/TextAd";
import MediaAd from "./pages/MediaAd";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ad" element={<CreateAd />} />
          <Route path="/textad" element={<TextAd />} />
          <Route path="/mediaad" element={<MediaAd />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
