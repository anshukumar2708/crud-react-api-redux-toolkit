import Header from "../header/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <Header />
      <div className="w-full max-w-[1140px] px-2">{children}</div>
    </div>
  );
};

export default Layout;
