"use client";

import { requestAccess, requestOtp, verifyOtp } from "../../apis/auth";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Auth({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [googleAddress, setGoogleAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [lgas, setLgas] = useState([]);
  const [lga, setLga] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("Employer");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [receivedOtp, setReceivedOtp] = useState(""); // Store OTP from API
  const [loading, setLoading] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [validation, setValidation] = useState({
    minLength: false,
    hasNumber: false,
    hasUppercase: false,
    hasSpecialChar: false,
  });

  // LgaData and stateData
  const lgaData = {
    Abia: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala Ngwa North",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu Nneochi",
    ],
    Adamawa: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South",
    ],
    "Akwa Ibom": [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanafun",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo",
    ],
    Anambra: [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi",
    ],
    Bauchi: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa Balewa",
      "Toro",
      "Warji",
      "Zaki",
    ],
    Bayelsa: [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Ijaw",
      "Yenagoa",
    ],
    Benue: [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer East",
      "Gwer West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Obi",
      "Ogbadibo",
      "Oju",
      "Okpokwu",
      "Ohimini",
      "Oturkpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya",
    ],
    Borno: [
      "Abadam",
      "Askira/Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani",
    ],
    "Cross River": [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar Municipal",
      "Calabar South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakurr",
      "Yala",
    ],
    Delta: [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope East",
      "Ethiope West",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Okpe",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ughelli South",
      "Ukwuani",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West",
    ],
    Ebonyi: [
      "Abakaliki",
      "Afikpo North",
      "Afikpo South",
      "Ebonyi",
      "Ezza North",
      "Ezza South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Ohaozara",
      "Ohaukwu",
      "Onicha",
    ],
    Edo: [
      "Akoko-Edo",
      "Egor",
      "Esan Central",
      "Esan North-East",
      "Esan South-East",
      "Esan West",
      "Etsako Central",
      "Etsako East",
      "Etsako West",
      "Igueben",
      "Ikpoba-Okha",
      "Oredo",
      "Orhionmwon",
      "Ovia North-East",
      "Ovia South-West",
      "Owan East",
      "Owan West",
      "Uhunmwonde",
    ],
    Ekiti: [
      "Ado Ekiti",
      "Efon",
      "Ekiti East",
      "Ekiti South-West",
      "Ekiti West",
      "Emure",
      "Gbonyin",
      "Ido Osi",
      "Ijero",
      "Ikere",
      "Ikole",
      "Ilejemeje",
      "Irepodun/Ifelodun",
      "Ise/Orun",
      "Moba",
      "Oye",
    ],
    Enugu: [
      "Aninri",
      "Awgu",
      "Enugu East",
      "Enugu North",
      "Enugu South",
      "Ezeagu",
      "Igbo Etiti",
      "Igbo Eze North",
      "Igbo Eze South",
      "Isi Uzo",
      "Nkanu East",
      "Nkanu West",
      "Nsukka",
      "Oji River",
      "Udenu",
      "Udi",
      "Uzouwani",
    ],
    Gombe: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu/Deba",
    ],
    Imo: [
      "Aboh Mbaise",
      "Ahiazu Mbaise",
      "Ehime Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Onuimo",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri Municipal",
      "Owerri North",
      "Owerri West",
    ],
    Jigawa: [
      "Auyo",
      "Babura",
      "Biriniwa",
      "Birnin Kudu",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin Hausa",
      "Kazaure",
      "Kiri Kasama",
      "Kiyawa",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Ringim",
      "Roni",
      "Sule Tankarkar",
      "Taura",
      "Yankwashi",
    ],
    Kaduna: [
      "Birnin Gwari",
      "Chikun",
      "Giwa",
      "Igabi",
      "Ikara",
      "Jaba",
      "Jema'a",
      "Kachia",
      "Kaduna North",
      "Kaduna South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon Gari",
      "Sanga",
      "Soba",
      "Zangon Kataf",
      "Zaria",
    ],
    Kano: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin Kudu",
      "Dawakin Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takai",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun Wada",
      "Ungogo",
      "Warawa",
      "Wudil",
    ],
    Katsina: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dandume",
      "Danja",
      "Dan Musa",
      "Daura",
      "Dutsi",
      "Dutsin-Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai'Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango",
    ],
    Kebbi: [
      "Aleiro",
      "Arewa Dandi",
      "Argungu",
      "Bagudo",
      "Birnin Kebbi",
      "Bunza",
      "Dandi",
      "Danko-Wasagu",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko/Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu/Danko",
      "Yauri",
    ],
    Kogi: [
      "Ajaokuta",
      "Ankpa",
      "Bassa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela/Odolu",
      "Kabba/Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro",
      "Ofu",
      "Ogori/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Yagba East",
      "Yagba West",
    ],
    Kwara: [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti",
      "Ifelodun",
      "Ilorin East",
      "Ilorin South",
      "Ilorin West",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke-Ero",
      "Oyun",
      "Pategi",
    ],
    Lagos: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Banglade",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Mainland",
      "Lagos Island",
      "Mushin",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere",
    ],
    Nasarawa: [
      "Akwanga",
      "Assakio",
      "Doma",
      "Karu",
      "Keana",
      "Kokona",
      "Lafia",
      "Nasarawa",
      "Nasarawa Eggon",
      "Obi",
      "Toto",
      "Wamba",
    ],
    Niger: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lavun",
      "Magama",
      "Mariga",
      "Mokwa",
      "Rafi",
      "Raymond",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi",
    ],
    Ogun: [
      "Abeokuta North",
      "Abeokuta South",
      "Ado-Odo/Ota",
      "Ewekoro",
      "Ifo",
      "Ijebu East",
      "Ijebu North",
      "Ijebu North East",
      "Ijebu Ode",
      "Ikenne",
      "Imeko-Afon",
      "Ipokia",
      "Obafemi-Owode",
      "Ogun Waterside",
      "Olorunsogo",
      "Remo North",
      "Shagamu",
    ],
    Ondo: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-East",
      "Akoko South-West",
      "Akure North",
      "Akure South",
      "Ese-Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Ile-Oluji/Okeigbo",
      "Irele",
      "Odigbo",
      "Okitipupa",
      "Ondo East",
      "Ondo West",
      "Ose",
      "Owo",
    ],
    Osun: [
      "Aiyedaade",
      "Aiyedire",
      "Atakumosa East",
      "Atakumosa West",
      "Boluwaduro",
      "Boripe",
      "Ede North",
      "Ede South",
      "Egbedore",
      "Ejigbo",
      "Ife Central",
      "Ife East",
      "Ife North",
      "Ife South",
      "Ilesa East",
      "Ilesa West",
      "Irepodun",
      "Isokan",
      "Iwo",
      "Osogbo",
    ],
    Oyo: [
      "Akinyele",
      "Atiba",
      "Atigbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibadan South-West",
      "Ibarapa Central",
      "Ibarapa East",
      "Ibarapa North",
      "Ido",
      "Irepo",
      "Iskosi",
      "Iseyin",
      "Kajola",
      "Lagelu",
      "Ogo Oluwa",
      "Olorunsogo",
      "Oluyole",
      "Ona Ara",
      "Orelope",
      "Oyo East",
      "Oyo West",
      "Saki East",
      "Saki West",
    ],
    Plateau: [
      "Barkin Ladi",
      "Bassa",
      "Bokkos",
      "Jos East",
      "Jos North",
      "Jos South",
      "Kanam",
      "Kanke",
      "Langtang North",
      "Langtang South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase",
    ],
    Rivers: [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Akuku-Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Eleme",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obio/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port Harcourt",
      "Tai",
    ],
    Sokoto: [
      "Binji",
      "Bodinga",
      "Dange-Shuni",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Isa",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto North",
      "Sokoto South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
    ],
    Taraba: [
      "Ardo Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim Lamido",
      "Kurmi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing",
    ],
    Yobe: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari",
    ],
    Zamfara: [
      "Anka",
      "Bakura",
      "Birnin Magaji/Kiyaw",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Kaura Namoda",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata Mafara",
      "Tsafe",
      "Zurmi",
    ],
    "FCT Abuja": [
      "Abaji",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali",
      "Municipal Area Council (AMAC)",
    ],
  };

  // State and cities data
  const cityData = {
    Abia: [
      "Aba",
      "Arochukwu",
      "Bende",
      "Isuikwuato",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa",
      "Umuahia",
      "Umunneochi",
    ],
    Adamawa: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jimeta",
      "Madagali",
      "Mayo-Belwa",
      "Mubi",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola",
    ],
    AkwaIbom: [
      "Abak",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono Ibom",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat Enin",
      "Nsit Atai",
      "Nsit Ibom",
      "Nsit Ubium",
      "Obot Akara",
      "Okobo",
      "Oron",
      "Oruk Anam",
      "Ukanafun",
      "Uruan",
      "Urue Offong/Oruko",
      "Uyo",
    ],
    Anambra: [
      "Achalla",
      "Aguleri",
      "Atani",
      "Awka",
      "Ekwulobia",
      "Ihiala",
      "Neni",
      "Nnewi",
      "Ogbaru",
      "Onitsha",
      "Orumba",
      "Otuocha",
      "Ozubulu",
      "Umunze",
    ],
    Bauchi: [
      "Alkaleri",
      "Azare",
      "Bauchi",
      "Bogoro",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Misau",
      "Ningi",
      "Tafawa Balewa",
      "Toro",
      "Warji",
      "Zaki",
    ],
    Bayelsa: [
      "Amassoma",
      "Brass",
      "Ekeremor",
      "Kaiama",
      "Nembe",
      "Ogbia",
      "Okordia",
      "Sagbama",
      "Southern Ijaw",
      "Toru-Orua",
      "Twon-Brass",
      "Yenagoa",
    ],
    Benue: [
      "Gboko",
      "Katsina-Ala",
      "Makurdi",
      "Otukpo",
      "Ugbokolo",
      "Ushongo",
      "Vandeikya",
    ],
    Borno: [
      "Askira",
      "Bama",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Gwoza",
      "Jere",
      "Kaga",
      "Kukawa",
      "Maiduguri",
      "Magumeri",
      "Monguno",
      "Ngala",
      "Shani",
    ],
    CrossRiver: ["Akampa", "Calabar", "Ikom", "Obudu", "Odukpani", "Ugep"],
    Delta: [
      "Abraka",
      "Agbor",
      "Asaba",
      "Bomadi",
      "Burutu",
      "Kwale",
      "Ogwashi-Uku",
      "Oleh",
      "Orerokpe",
      "Ovwian",
      "Sapele",
      "Ughelli",
      "Warri",
    ],
    Ebonyi: [
      "Abakaliki",
      "Afikpo",
      "Ezza",
      "Ikwo",
      "Ishielu",
      "Ohaukwu",
      "Onicha",
    ],
    Edo: [
      "Agenebode",
      "Auchi",
      "Benin City",
      "Ekpoma",
      "Igueben",
      "Irrua",
      "Ubiaja",
      "Uromi",
    ],
    Ekiti: [
      "Ado Ekiti",
      "Aramoko",
      "Efon Alaaye",
      "Emure",
      "Ikere Ekiti",
      "Ikole Ekiti",
      "Ilawe Ekiti",
      "Omuo Ekiti",
    ],
    Enugu: ["Awgu", "Enugu", "Nsukka", "Oji River", "Udi", "Uzo-Uwani"],
    "FCT Abuja": [
      "Abaji",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali",
      "Municipal Area Council",
    ],
    Gombe: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu/Deba",
    ],
    Imo: [
      "Aboh Mbaise",
      "Ehime Mbano",
      "Ideato",
      "Ikeduru",
      "Isiala Mbano",
      "Isu",
      "Mbaitoli",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Orlu",
      "Orsu",
      "Oru",
      "Owerri",
    ],
    Jigawa: [
      "Birnin Kudu",
      "Dutse",
      "Gumel",
      "Hadejia",
      "Kazaure",
      "Kafin Hausa",
    ],
    Kaduna: ["Kaduna", "Kafanchan", "Zaria"],
    Kano: ["Dala", "Fagge", "Gwale", "Kano", "Nasarawa", "Tarauni"],
    Katsina: ["Daura", "Funtua", "Katsina"],
    Kebbi: ["Argungu", "Birnin Kebbi", "Zuru"],
    Kogi: ["Anyigba", "Idah", "Kabba", "Lokoja", "Okene"],
    Kwara: ["Ilorin", "Offa", "Omu-Aran"],
    Lagos: [
      "Agege",
      "Ajah",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Festac Town",
      "Ikeja",
      "Ikorodu",
      "Ikoyi",
      "Kosofe",
      "Lagos Island",
      "Lagos Mainland",
      "Lekki",
      "Mushin",
      "Oshodi",
      "Shomolu",
      "Surulere",
      "Victoria Island",
      "Yaba",
    ],
    Nasarawa: ["Akwanga", "Keffi", "Lafia"],
    Niger: ["Bida", "Kontagora", "Minna", "Suleja"],
    Ogun: ["Abeokuta", "Ijebu-Ode", "Sagamu"],
    Ondo: ["Akure", "Ikare", "Ondo"],
    Osun: ["Ede", "Ife", "Ilesa", "Osogbo"],
    Oyo: ["Ibadan", "Iseyin", "Ogbomosho"],
    Plateau: ["Barkin Ladi", "Jos", "Pankshin"],
    Rivers: ["Bonny", "Port Harcourt"],
    Sokoto: ["Sokoto", "Wurno"],
    Taraba: ["Bali", "Gembu", "Jalingo"],
    Yobe: ["Damaturu", "Gashua", "Nguru", "Potiskum"],
    Zamfara: ["Gusau", "Kaura Namoda"],
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    const newValidation = {
      minLength: inputPassword.length >= 6,
      hasNumber: /\d/.test(inputPassword),
      hasUppercase: /[A-Z]/.test(inputPassword),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword),
    };
    setValidation(newValidation);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    if (password && inputConfirmPassword !== password) {
      setErrorMessage("Password do not match.");
    } else {
      setErrorMessage("");
    }
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setLgas(lgaData[selectedState] || []);
    setLga(""); // Reset LGA when state changes
  };

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue) && emailValue !== "") {
      alert("Please enter a valid email address");
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    localStorage.setItem("role", e.target.value); // Save selected role
  };

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      // Ensure only numeric input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus to next input
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate age
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      alert("You must be at least 18 years old.");
      setLoading(false);
      return;
    }

    const dobISO = dob ? new Date(dob).toISOString() : null;
    console.log("Formatted DOB:", dobISO);

    const userType = role.includes("Employer")
      ? role.split(" (")[1]?.replace(")", "")
      : role;

    try {
      const response = await requestAccess(
        firstName,
        middleName,
        lastName,
        dobISO,
        email,
        googleAddress,
        country,
        state,
        lga,
        gender,
        password,
        confirmPassword,
        phoneNumber,
        userType,
        businessName,
        businessType,
        businessCategory
      );

      console.log("Full API Response:", response?.data);

      if (response?.data?.statusCode === 200) {
        const receivedOtp = response?.data?.data?.otp;

        console.log("Extracted OTP:", receivedOtp);

        if (receivedOtp) {
          setReceivedOtp(receivedOtp);

          setOtp(["", "", "", ""]);

          setModalOpen(true);
        } else {
          alert("OTP not received. Please check your email.");
        }
      } else if (
        response?.data?.statusCode === 401 ||
        response?.data?.statusCode === 403
      ) {
        window.location.href = "/justice/unauthorized";
      } else {
        alert(response?.data?.message);
      }
    } catch (error) {
      console.error("Error during request:", error);
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const enteredOtp = otp.join("");
    const response = await verifyOtp(email, enteredOtp);

    console.log("OTP Verification Response:", response?.data);

    if (response?.status === 201) {
      const token = response?.data?.token;

      // Store token in localStorage and cookies
      localStorage.setItem("token", token);
      document.cookie = `auth_token=${token}; path=/; max-age=${
        60 * 60 * 24 * 7
      };`;

      window.location.href = "/justice/login";
    } else if (
      response?.data?.statusCode === 401 ||
      response?.data?.statusCode === 403
    ) {
      window.location.href = "/justice/unauthorized";
    } else {
      alert(response?.data?.message);
    }

    setLoading(false);
  };

  const handleResendOtp = async () => {
    setLoading(true);

    const response = await requestOtp(email);

    console.log("response", response);
    // window.location.href = "/justice/dashboard";

    if (response?.status === 201) {
      alert("A new OTP has been sent to your email");
    } else if (
      response?.data?.statusCode === 401 ||
      response?.data?.statusCode === 403
    ) {
      window.location.href = "/justice/unauthorized";
    } else {
      alert("Unable to resend OTP");
    }
    setLoading(false);

    console.log("respoooo", response);
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("auth__modal")) {
      setModalOpen(false);
      // setModalOpenTwo(false);
    }
  };

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <main className="request">
      <div className="request__personal-info">
        <Image
          alt=""
          src="/assets/logo.png"
          width={66.089}
          height={66.089}
          style={{ marginBottom: "16px", cursor: "pointer" }}
          onClick={() => (window.location.href = "/justice")}
        />
        <h2 className="request__personal-info__title">
          Centrailsed Domestic Staff Registrar
          <br />
          CDSR
        </h2>

        <div className="request__personal-info__detail">
          <div className="request__personal-info__detail__info-box">
            <div className="icon">
              <svg
                width="15"
                height="18"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 19.5V17.5C17 16.4391 16.5786 15.4217 15.8284 14.6716C15.0783 13.9214 14.0609 13.5 13 13.5H5C3.93913 13.5 2.92172 13.9214 2.17157 14.6716C1.42143 15.4217 1 16.4391 1 17.5V19.5M13 5.5C13 7.70914 11.2091 9.5 9 9.5C6.79086 9.5 5 7.70914 5 5.5C5 3.29086 6.79086 1.5 9 1.5C11.2091 1.5 13 3.29086 13 5.5Z"
                  stroke="#009B07"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <h4>{role} Info</h4>
              <p>Provide your details to create account</p>
            </div>
          </div>

          <div className="request__personal-info__detail__info-box"></div>
        </div>
      </div>

      <div className="request__account-details">
        <h2 className="request__account-details__title">
          {/* Create a Free account */}
          Account Registration
        </h2>

        <h2 className="request__account-details__sub-title">
          Provide your details to create an account
        </h2>

        <form
          className="request__account-details__form"
          onSubmit={handleSubmitRequest}
        >
          {role.includes("Employer") && role.includes("Individual") && (
            <>
              <div>
                <label>First Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Middle Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Last Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Gender:</label>
                <div>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Date of Birth:</label>
                <div>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Email Address:</label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onBlur={validateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Phone Number:</label>
                <div>
                  <PhoneInput
                    country={"ng"}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputProps={{
                      required: true,
                    }}
                  />
                </div>
              </div>

              <div>
                <label>Country:</label>
                <div>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Nationality
                    </option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
              </div>

              <div>
                <label>State:</label>
                <div>
                  <select
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    required
                  >
                    <option value="">Select State</option>
                    {Object.keys(lgaData).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>LGA:</label>
                <div>
                  <select
                    id="lga"
                    value={lga}
                    onChange={(e) => setLga(e.target.value)}
                    required
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>Home Address:</label>
                <div className="google-address-container">
                  <Image
                    src="/icons/google-map.svg"
                    alt="Google Maps Icon"
                    width={18}
                    height={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter your home address"
                    value={googleAddress}
                    onChange={(e) => setGoogleAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <aside className="password-requirements">
                  <p className={validation.minLength ? "valid" : "invalid"}>
                    <span>{validation.minLength ? "✔" : "✘"}</span> At least 6
                    characters.
                  </p>
                  <p className={validation.hasNumber ? "valid" : "invalid"}>
                    <span>{validation.hasNumber ? "✔" : "✘"}</span> 1 numeric
                    character (0-9).
                  </p>
                  <p className={validation.hasUppercase ? "valid" : "invalid"}>
                    <span>{validation.hasUppercase ? "✔" : "✘"}</span> A minimum
                    of 1 uppercase.
                  </p>
                  <p
                    className={validation.hasSpecialChar ? "valid" : "invalid"}
                  >
                    <span>{validation.hasSpecialChar ? "✔" : "✘"}</span> A
                    minimum of 1 special character.
                  </p>
                </aside>
              </div>

              <div>
                <label>Confirm Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>

                {errorMessage && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage}
                  </p>
                )}
              </div>
            </>
          )}

          {role.includes("Employer") && role.includes("Business") && (
            <>
              <div>
                <label>Business Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Business Name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Business Type</label>
                <div>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="Cooperative">Cooperative</option>
                    <option value="Corporation (Inc.)">
                      Corporation (Inc.)
                    </option>
                    <option value="Franchise">Franchise</option>
                    <option value="Freelancer / Independent Contractor">
                      Freelancer / Independent Contractor
                    </option>
                    <option value="Government-Owned Business">
                      Government-Owned Business
                    </option>
                    <option value="Joint Venture">Joint Venture</option>
                    <option value="Limited Liability Company (LLC)">
                      Limited Liability Company (LLC)
                    </option>
                    <option value="Non-Profit Organization (NGO)">
                      Non-Profit Organization (NGO)
                    </option>
                    <option value="Partnership">Partnership</option>
                    <option value="Private Limited Company (Ltd.)">
                      Private Limited Company (Ltd.)
                    </option>
                    <option value="Public Limited Company (PLC)">
                      Public Limited Company (PLC)
                    </option>
                    <option value="Sole Proprietorship">
                      Sole Proprietorship
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label>Business Category/Industry:</label>
                <div>
                  <select
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Agriculture & Farming">
                      Agriculture & Farming
                    </option>
                    <option value="Education & Training">
                      Education & Training
                    </option>
                    <option value="Energy & Utilities">
                      Energy & Utilities
                    </option>
                    <option value="Fashion & Beauty">Fashion & Beauty</option>
                    <option value="Finance & Banking">Finance & Banking</option>
                    <option value="Healthcare & Pharmaceuticals">
                      Healthcare & Pharmaceuticals
                    </option>
                    <option value="Hospitality & Tourism">
                      Hospitality & Tourism
                    </option>
                    <option value="Legal & Consulting Services">
                      Legal & Consulting Services
                    </option>
                    <option value="Manufacturing & Production">
                      Manufacturing & Production
                    </option>
                    <option value="Marketing & Advertising">
                      Marketing & Advertising
                    </option>
                    <option value="Media & Entertainment">
                      Media & Entertainment
                    </option>
                    <option value="Real Estate & Construction">
                      Real Estate & Construction
                    </option>
                    <option value="Retail & E-commerce">
                      Retail & E-commerce
                    </option>
                    <option value="Technology & Software">
                      Technology & Software
                    </option>
                    <option value="Transportation & Logistics">
                      Transportation & Logistics
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label>Representative First Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Representative Middle Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Representative Last Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Business Email:</label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter Business Email"
                    value={email}
                    onBlur={validateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Businesss Phone Number:</label>
                <div>
                  <PhoneInput
                    country={"ng"}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputProps={{
                      required: true,
                    }}
                  />
                </div>
              </div>

              <div>
                <label>Country:</label>
                <div>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Nationality
                    </option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
              </div>

              <div>
                <label>State:</label>
                <div>
                  <select
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    required
                  >
                    <option value="">Select State</option>
                    {Object.keys(lgaData).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>LGA:</label>
                <div>
                  <select
                    id="lga"
                    value={lga}
                    onChange={(e) => setLga(e.target.value)}
                    required
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>Business Address</label>
                <div className="google-address-container">
                  <Image
                    src="/icons/google-map.svg"
                    alt="Google Maps Icon"
                    width={18}
                    height={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter Business Address"
                    value={googleAddress}
                    onChange={(e) => setGoogleAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <aside className="password-requirements">
                  <p className={validation.minLength ? "valid" : "invalid"}>
                    <span>{validation.minLength ? "✔" : "✘"}</span> At least 6
                    characters.
                  </p>
                  <p className={validation.hasNumber ? "valid" : "invalid"}>
                    <span>{validation.hasNumber ? "✔" : "✘"}</span> 1 numeric
                    character (0-9).
                  </p>
                  <p className={validation.hasUppercase ? "valid" : "invalid"}>
                    <span>{validation.hasUppercase ? "✔" : "✘"}</span> A minimum
                    of 1 uppercase.
                  </p>
                  <p
                    className={validation.hasSpecialChar ? "valid" : "invalid"}
                  >
                    <span>{validation.hasSpecialChar ? "✔" : "✘"}</span> A
                    minimum of 1 special character.
                  </p>
                </aside>
              </div>

              <div>
                <label>Confirm Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>

                {errorMessage && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage}
                  </p>
                )}
              </div>
            </>
          )}

          {role === "Employee" && (
            <>
              <div>
                <label>First Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Middle Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Last Name:</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Gender:</label>
                <div>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Date of Birth:</label>
                <div>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Email Address:</label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onBlur={validateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Phone Number:</label>
                <div>
                  <PhoneInput
                    country={"ng"}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputProps={{
                      required: true,
                    }}
                  />
                </div>
              </div>

              <div>
                <label>Country:</label>
                <div>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Nationality
                    </option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
              </div>

              <div>
                <label>State:</label>
                <div>
                  <select
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    required
                  >
                    <option value="">Select State</option>
                    {Object.keys(lgaData).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>LGA:</label>
                <div>
                  <select
                    id="lga"
                    value={lga}
                    onChange={(e) => setLga(e.target.value)}
                    required
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>Home Address:</label>
                <div className="google-address-container">
                  <Image
                    src="/icons/google-map.svg"
                    alt="Google Maps Icon"
                    width={18}
                    height={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter your home address"
                    value={googleAddress}
                    onChange={(e) => setGoogleAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <aside className="password-requirements">
                  <p className={validation.minLength ? "valid" : "invalid"}>
                    <span>{validation.minLength ? "✔" : "✘"}</span> At least 6
                    characters.
                  </p>
                  <p className={validation.hasNumber ? "valid" : "invalid"}>
                    <span>{validation.hasNumber ? "✔" : "✘"}</span> 1 numeric
                    character (0-9).
                  </p>
                  <p className={validation.hasUppercase ? "valid" : "invalid"}>
                    <span>{validation.hasUppercase ? "✔" : "✘"}</span> A minimum
                    of 1 uppercase.
                  </p>
                  <p
                    className={validation.hasSpecialChar ? "valid" : "invalid"}
                  >
                    <span>{validation.hasSpecialChar ? "✔" : "✘"}</span> A
                    minimum of 1 special character.
                  </p>
                </aside>
              </div>

              <div>
                <label>Confirm Password:</label>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>

                {errorMessage && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="submit-button">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>

      {modalOpen && (
        <div className="auth__otp-notification">
          <strong>Verification Code:</strong> {receivedOtp}
        </div>
      )}

      {modalOpen && (
        <div className="auth__modal" onClick={handleModalClose}>
          <form className="auth__modal__inner" onSubmit={handleVerifyOtp}>
            <div className="auth__modal__inner__title">OTP Verification</div>
            <div className="auth__modal__inner__subtitle">
              Enter the OTP sent to {email}
            </div>

            <div className="auth__modal__inner__otp-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  className="auth__modal__inner__otp-group__input"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                />
              ))}
            </div>

            <div
              className="auth__modal__inner__request pointer"
              onClick={handleResendOtp}
            >
              Request a new code
            </div>

            <button disabled={loading}>
              {loading ? "Loading..." : "Verify OTP"}
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
