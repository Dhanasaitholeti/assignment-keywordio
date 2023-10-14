import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import CreateAd from "./components/Createad";
import TextAd from "./components/TextAd";
import MediaAd from "./components/MediaAd";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ad" element={<CreateAd />} />
          <Route path="/textad" element={<TextAd />} />
          <Route path="/mediaad" element={<MediaAd />} />
          <Route path="/sucess" element={<h1>Sucess</h1>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
