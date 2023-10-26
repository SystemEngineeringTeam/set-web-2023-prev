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

  a {
    color: #0a9b94;
    text-decoration: none;
    transition-duration: 0.3s;
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
