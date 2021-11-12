import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <div className="bg-background min-h-screen">
      <SEO />
      {children}
    </div>
  );
};

export default Layout;
