import { GetServerSideProps } from "next";
import nookies from "nookies";
import AnalyticsComponent from "../components/Analytics/index";
import AI from "../utils/AI";

const Analytics = ({
  ageDistribution,
  genderDistribution,
  medicalCondition,
}: {
  ageDistribution: any;
  genderDistribution: any;
  medicalCondition: any;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnalyticsComponent
        ageDistribution={ageDistribution}
        genderDistribution={genderDistribution}
        medicalCondition={medicalCondition}
      />
    </div>
  );
};

export default Analytics;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const ageDistributionResponse = await AI.get("/ageDistribution");
  const ageDistribution = ageDistributionResponse.data;
  const genderDistributionResponse = await AI.get("/genderDistribution");
  const genderDistribution = genderDistributionResponse.data;
  const medicalConditionResponse = await AI.get("/medicalConditionFreq");
  const medicalCondition = medicalConditionResponse.data;

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
    props: {
      ageDistribution,
      genderDistribution,
      medicalCondition,
    },
  };
};
