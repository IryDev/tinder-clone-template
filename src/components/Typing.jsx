import { TypeAnimation } from "react-type-animation";

export function Typing() {
  return (
    <>
      <TypeAnimation
        className="z-[-2]"
        aria-hidden="true"
        sequence={[1000, "swipe", 2000, "sight"]}
        speed={5}
        repeat={Infinity}
      />
    </>
  );
}
