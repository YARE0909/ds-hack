import { GetServerSideProps } from "next";
import nookies from "nookies";
import Home from "../components/Home";

export default function IndexPage() {
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
      <Home />
    </div>
  );
}

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
