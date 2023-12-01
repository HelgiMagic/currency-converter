import { useTranslation } from "react-i18next";
import Converter from "./Converter";
import Card from "./Card";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("converter")}</h1>
      <div className='container'>
        <Converter />
        <Card color="orange"></Card>
      </div>
    </>
  );
}
