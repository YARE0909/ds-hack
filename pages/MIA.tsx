import { GetServerSideProps } from "next";
import nookies from "nookies";
import MIAComponent from "../components/MIA/index";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <MIAComponent />
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  if (
    !cookies.token ||
    cookies.token === "null" ||
    cookies.token === "undefined"
  ) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
