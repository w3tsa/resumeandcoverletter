import { useMediaQuery } from "@chakra-ui/react";

// local imports
import DesktopView from "./DesktopView";
import MobileView from "./MobilView";

const Navigation = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return <>{isLargerThan700 ? <DesktopView /> : <MobileView />}</>;
};

export default Navigation;
