import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Detect from "./pages/Detect";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAnalytics } from "./hooks/useAnalytics";

// Import face shapes pages
import FaceShapes from "./pages/FaceShapes";
import OvalFace from "./pages/FaceShapes/OvalFace";
import RoundFace from "./pages/FaceShapes/RoundFace";
import SquareFace from "./pages/FaceShapes/SquareFace";
import HeartFace from "./pages/FaceShapes/HeartFace";
import DiamondFace from "./pages/FaceShapes/DiamondFace";
import OblongFace from "./pages/FaceShapes/OblongFace";

// Import face shapes pages
import FaceShapeTypeResult from "./pages/PhotoResult/FaceShapeTypeResult";

// Analytics wrapper component
const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <>{children}</>;
};

// Layout component that includes Header and Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsWrapper>
        <div className="flex flex-col min-h-screen bg-white">
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Detect />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />

            {/* Face Shape Routes */}
            <Route
              path="/face-shapes"
              element={
                <Layout>
                  <FaceShapes />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/oval"
              element={
                <Layout>
                  <OvalFace />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/round"
              element={
                <Layout>
                  <RoundFace />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/square"
              element={
                <Layout>
                  <SquareFace />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/heart"
              element={
                <Layout>
                  <HeartFace />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/diamond"
              element={
                <Layout>
                  <DiamondFace />
                </Layout>
              }
            />
            <Route
              path="/face-shapes/oblong"
              element={
                <Layout>
                  <OblongFace />
                </Layout>
              }
            />
            <Route
              path="/photo-result/face-shape-type-result"
              element={
                <Layout>
                  <FaceShapeTypeResult />
                </Layout>
              }
            />
          </Routes>
        </div>
      </AnalyticsWrapper>
    </Router>
  );
};

export default App;
