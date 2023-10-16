import AdInsights from "../components/AdInsights";
import AdMetrics from "../components/AdMetrics";

const Dashboard = () => {
  return (
    <>
      <main className="container w-full mx-auto py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <AdInsights />
        <AdMetrics />
      </main>
    </>
  );
};

export default Dashboard;
