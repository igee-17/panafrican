import health from "../assets/images/health.svg";
import education from "../assets/images/education.svg";
import environment from "../assets/images/environment.svg";
import protest from "../assets/images/protest.svg";
import africanAmericanWoman from "../assets/images/africanAmericanWoman.png";
import studentsLearning from "../assets/images/studentsLearning.png";
import darkSkinnedStudents from "../assets/images/darkSkinnedStudents.png";
import wordDesign from "../assets/images/wordDesign.png";
import climateChange from "../assets/images/climateChange.png";
import businessMale from "../assets/images/businessMale.png";
import heart from "../assets/images/heart.svg";
import cap from "../assets/images/cap.svg";
import growth from "../assets/images/growth.svg";
import equal from "../assets/images/equal.svg";
import globe from "../assets/images/globe.svg";
import whiteHeart from "../assets/logos/whiteHeart.svg";
import whiteCap from "../assets/logos/whiteCap.svg";
import whiteEnvironment from "../assets/logos/whiteEnvironment.svg";
import whiteProtest from "../assets/logos/whiteProtest.svg";
import handshakeNew from "../assets/images/handshakeNew.svg";
import heartGrey from "../assets/logos/heartGrey.svg";
import capGrey from "../assets/logos/capGrey.svg";
import growthGrey from "../assets/logos/growthGrey.svg";
import equalGrey from "../assets/logos/equalGrey.svg";
import globeGrey from "../assets/logos/globeGrey.svg";
import handshakeGrey from "../assets/logos/handshakeGrey.svg";

export const blocks = [
  {
    image: health,
    text: "Health",
    whiteImg: whiteHeart,
  },
  {
    image: education,
    text: "Education",
    whiteImg: whiteCap,
  },
  {
    image: environment,
    text: "Environment",
    whiteImg: whiteEnvironment,
  },
  {
    image: protest,
    text: "Economic Empowerment",
    whiteImg: whiteProtest,
  },
];

export const goals = [
  {
    image: africanAmericanWoman,
    logo: heart,
    number: 3,
    text: "Good Health And Well-Being",
    color: "rgba(60, 182, 75, 0.70)",
    greyLogo: heartGrey,
  },
  {
    image: studentsLearning,
    logo: cap,
    number: 4,
    text: "Quality Education",
    color: "rgba(197, 33, 51, 0.70)",
    greyLogo: capGrey,
  },
  {
    image: darkSkinnedStudents,
    logo: growth,
    number: 8,
    text: "Decent Work And Economic Growth",
    color: "rgba(144, 26, 57, 0.70)",
    greyLogo: growthGrey,
  },
  {
    image: wordDesign,
    logo: equal,
    number: 10,
    text: "Reduced Inequalities",
    color: "rgba(220, 30, 129, 0.70)",
    greyLogo: equalGrey,
  },
  {
    image: climateChange,
    logo: globe,
    number: 13,
    text: "Climate Action",
    color: "rgba(71, 119, 62, 0.70)",
    greyLogo: globeGrey,
  },
  {
    image: businessMale,
    logo: handshakeNew,
    number: 17,
    text: "Partnership For The Goals",
    color: "rgba(32, 56, 100, 0.70)",
    greyLogo: handshakeGrey,
  },
];
