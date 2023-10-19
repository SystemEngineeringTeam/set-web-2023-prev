import { DescriptionContents, DescriptionTitle } from "@/const/md/home";
import Color from "@/const/style/Color";
import styled from "styled-components";

const AboutSection = styled.section`
  height: auto;
  padding: 70px 20px 80px;
  background-color: ${Color.WHITE};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  padding: 10px 0;
  margin-inline: auto;
  max-width: 850px;
`;

const Description = styled.p`
  margin-inline: auto;
  max-width: 800px;
  font-size: 1rem;
`;

export default function About() {
  return (
    <AboutSection>
      <Title>{DescriptionTitle}</Title>
      {DescriptionContents.map((desc, i) => (
        <Description key={i}>{desc}</Description>
      ))}
    </AboutSection>
  );
}
