import FriendsAndFam from "../slides/FriendsAndFam";
import IntroSlide from "../slides/IntroSlide";
import LineageSlide from "../slides/LineageSlide";
import MeSlide from "../slides/MeSlide";
import Accomplishments from "../slides/Accomplishments";
import ExtraCredit from "../slides/ExtraCredit";

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
    case 5:
      return <ExtraCredit />;
    default:
      return <IntroSlide />;
  }
}
