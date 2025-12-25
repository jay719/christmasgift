import FriendsAndFam from "../slides/FriendsAndFam";
import IntroSlide from "../slides/IntroSlide";
import LineageSlide from "../slides/LineageSlide";
// import StrengthSlide from "../slides/StrengthSlide";
// import LoveSlide from "../slides/LoveSlide";
import MeSlide from "../slides/MeSlide";
import Accomplishments from "../slides/Accomplishments";

export default function SlideRenderer({ index }) {
  switch (index) {
    case 0:
      return <IntroSlide />;
    case 1:
      return <LineageSlide />;
    case 2:
      return <FriendsAndFam />;
    case 3:
      return <Accomplishments />;
    case 4:
      return <MeSlide />;
    default:
      return <IntroSlide />;
  }
}
