import React from "react";
/*typescriptte prop kullanan componentin varsa o componenti de yazmalısın 
export default function SectionHeading({ children }: {children: React.ReactNode;}
*/

type SectionHeadingProps = {
  children: React.ReactNode; /* children tagler arasındaki yazı-> about me*/
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center tracking-[0.3rem]">
      {children} 
    </h2>
  );
}
