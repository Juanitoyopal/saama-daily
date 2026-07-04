import { CountryMarketPage } from "@/components/CountryMarketPage";
import { unitedStates } from "@/data/countries";

export default function UsaPage() {
  return <CountryMarketPage country={unitedStates} />;
}
