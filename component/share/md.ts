import Color from "@/const/style/Color";
import styled from "styled-components";

export const MdStyled = styled.div`
  overflow-x: hidden;

  h1 {
    font-size: 180%;
    font-weight: 700;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 150%;
    margin: 30px 0;
    margin-bottom: 10px;
    font-weight: 700;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
  }

  h3 {
    margin: 30px 0;
    margin-bottom: 10px;
    font-size: 125%;
    font-weight: 700;
  }

  p {
    margin: 20px 0;
  }

  a {
    color: #0a9b94;
    text-decoration: none;
    transition-duration: 0.3s;
  }

  img {
    max-width: 100%;
    border: 1px solid #eee;
  }

  iframe {
    max-width: 100%;
  }

  ul,
  ol {
    margin: 20px 0;
  }

  ol {
    list-style: decimal;
  }

  ul {
    padding-left: 2em;
    list-style: inside;

    ul {
      list-style-type: circle;
    }
  }

  pre > code {
    display: block;
    padding: 10.5px;
    margin: 0 0 11px;
    font-size: 13px;
    line-height: 1.6;
    color: #333333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
  }

  table {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 20px 0;
    margin-bottom: 30px;

    th {
      padding: 8px;
      line-height: 1.6;
      vertical-align: top;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    td {
      padding: 8px;
      line-height: 1.6;
      vertical-align: top;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    tr:nth-child(odd) td {
      background-color: #f9f9f9;
    }
  }
`;

export const MdStyledMember = styled.div`
  max-width: 600px;
  margin-inline: auto;

  & > * {
    padding-left: 30px;
  }

  a {
    color: ${Color.LIGHT};
  }

  h1,
  h2 {
    padding-left: 0;
    margin-top: 40px;
  }

  h3 {
    margin-top: 20px;
  }

  img {
    width: 100%;
  }
`;

export const MdStyledOther = styled.div`
  max-width: 600px;
  margin-inline: auto;

  & > * {
    padding-left: 30px;
  }

  a {
    color: ${Color.LIGHT};
  }

  h1 {
    padding-left: 0;
    margin-top: 40px;
  }

  h2 {
    margin-top: 10px;
  }

  img {
    width: 100%;
  }
`;
