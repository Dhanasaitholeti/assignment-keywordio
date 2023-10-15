import AdInsights from "../components/AdInsights";
import AdMetrics from "../components/AdMetrics";

const Dashboard = () => {
  return (
    <>
      <main className="container mx-auto py-10 flex items-center justify-between gap-20">
        <AdInsights />
        <AdMetrics />
      </main>
    </>
  );
};

export default Dashboard;
