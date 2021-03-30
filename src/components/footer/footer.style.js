import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  height: 6.25rem; /* 100px */
  margin: auto;
  max-width: 61.25rem; /* 980px */
  padding: 0 1.25rem; /* 20px */
`;

export const ProfyLink = styled.a`
  flex: 1;
`;

export const TermsLink = styled(Link)`
  flex: 1;
  text-align: right;
`;
