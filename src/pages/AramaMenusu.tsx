import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import turkishCities from "../pages/veri";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {
  AramaMenüsü,
  AramaMenüsüContextProps,
} from "../context/AramaBilgileri";
import "./CSS/AramaMenusu.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const AramaMenusu: React.FC = () => {
  const { secilen, setSecilen } =
    useContext<AramaMenüsüContextProps>(AramaMenüsü);

  const [tarih, setTarih] = useState<{ secilenTarih: Date | null }>({
    secilenTarih: null,
  });

  useEffect(() => {
    console.log("Seçilenler", secilen);
    console.log("kalkisNoktasi", secilen.kalkisNoktasi?.value);
    console.log("varisNoktasi", secilen.varisNoktasi?.value);
    console.log("yolculukTarihi", secilen.yolculukTarihi);
  }, [secilen]);

  useEffect(() => {
    if (tarih.secilenTarih) {
      const [day, month, year] = tarih.secilenTarih
        ?.toString()
        .slice(5, 16)
        .split(" ");
      const monthIndex = monthNames.indexOf(month) + 1; // Get the month's numeric value (1-12)
    }
  }, [tarih]);

  const handleInputChange = (
    event: { label: string | any },
    inputName: string
  ) => {
    setSecilen({ ...secilen, [inputName]: event });
  };

  const handleDateChange = (date: any) => {
    setTarih({ ...tarih, secilenTarih: date });
    if (date) {
      // tarihte bazı ufak kaymalar vardı onları düzelttim
      const selectedDate = new Date(date);
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      setSecilen({ ...secilen, yolculukTarihi: formattedDate });
    } else {
      setSecilen({ ...secilen, yolculukTarihi: null });
    }
  };
  return (
    <div id="A-MainContainer">
      <div className="A-container">
        <p>Kalkış Noktası</p>
        <Select
          options={turkishCities}
          onChange={(e) => handleInputChange(e, "kalkisNoktasi")}
          value={secilen.kalkisNoktasi}
          placeholder="Gidiş Noktası"
        />
      </div>
      <div className="A-container">
        <p>Varış Noktası</p>
        <Select
          placeholder="Varış Noktası"
          options={turkishCities}
          onChange={(e) => handleInputChange(e, "varisNoktasi")}
          value={secilen.varisNoktasi}
        />
      </div>
      <div className="A-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Yolculuk Tarihi"
              defaultValue={dayjs()}
              onChange={handleDateChange}
              disablePast
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default AramaMenusu;
