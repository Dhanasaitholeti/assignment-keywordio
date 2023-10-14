import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-5 my-10 bg-green-200">{children}</main>
    </>
  );
};

export default Layout;
