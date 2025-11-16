import StatsCount from "../ui/statscount";

const stats = [
  { value: 100, suffix: "+", label: "Məmnun Müştəri" },
  { value: 50, suffix: "+", label: "Zərif Kompozisiya" },
  { value: 99, suffix: "%", label: "Mükəmməl Rəy Oranı" },
];

export default function StatsCountSec() {
  return (
    <StatsCount
      stats={stats}
      title="Keyfiyyətimiz Rəqəmlərdə"
        showDividers={true}
    />
  );
}