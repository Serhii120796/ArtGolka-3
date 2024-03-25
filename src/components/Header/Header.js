import { HeaderCss, Container, Link, Contact } from './Header.styled.js';

export const Header = () => {
  return (
    <HeaderCss>
      <Container>
        <Link href="./index.html">
          <span>Art</span>Golka
        </Link>
        <Contact>
          Телефон для замовлень: (097) 39 41 955
        </Contact>
      </Container>
    </HeaderCss>
  );
};
