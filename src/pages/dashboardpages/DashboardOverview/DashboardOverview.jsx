import { OverviewChartSection } from "../../../components/dashboardcomponents/dasboardOverview/OverviewChartSection";
import { OverviewDataTableSection } from "../../../components/dashboardcomponents/dasboardOverview/OverviewDataTableSection";
import { StatCards } from "../../../components/dashboardcomponents/dasboardOverview/StatCards";

export default function OverviewPage() {
  return (
    <div className=" ">
      <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
      <div className="mt-5">
        <StatCards />
        <OverviewChartSection />
        <OverviewDataTableSection />
      </div>
    </div>
  );
}
