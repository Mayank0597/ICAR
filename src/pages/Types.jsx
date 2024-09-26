import React, { useEffect, useRef } from "react";
import TypesHero from "../components/TypesHero";
import TypesComponent from "../components/TypesComponent";
import TypesComponentPart1 from "../components/TypesComponentPart1";
import TypesComponentPart2 from "../components/TypesComponentPart2";
import TypesComponentPart3 from "../components/TypesComponentPart3";
import { useLocation } from "react-router-dom";

const Types = () => {
  const location = useLocation();
  const part1Ref = useRef(null); // Ref for TypesComponentPart1
  const part2Ref = useRef(null);

  useEffect(() => {
    if (location.hash === "#part1") {
      part1Ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#part2") {
      part2Ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      <TypesHero />
      {/* Scroll to this section when hash is #part1 */}
      <div ref={part1Ref}>
        <div className="h-5"></div>
        <TypesComponentPart1 />
      </div>
      <div ref={part2Ref}>
      <div className="h-5"></div>
        <TypesComponentPart2 />
      </div>
      <TypesComponentPart3 />
    </div>
  );
};

export default Types;
