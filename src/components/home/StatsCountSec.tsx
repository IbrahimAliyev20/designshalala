import StatsCount from "../ui/statscount";
import { getTranslations } from "next-intl/server";

export default async function StatsCountSec() {
  const t = await getTranslations("stats");

  const stats = [
    { value: 100, suffix: "+", label: t("satisfied_customers") },
    { value: 50, suffix: "+", label: t("compositions") },
    { value: 99, suffix: "%", label: t("satisfaction_rate") },
  ];

  return (
    <StatsCount
      stats={stats}
      title={t("title")}
      showDividers={true}
    />
  );
}
