import css from 'styled-components';

export const Container = css.div`
min-width: 320px;
max-width: 428px;
padding: 0 16px;
margin: 0 auto;

@media (min-width: 768px) {
  max-width: 768px;
}

@media (min-width: 1260px) {
  max-width: 1260px;
  padding: 0 15px;
}
`;

export const GalleryList = css.ul`
display: flex;
flex-wrap: wrap;
gap: 20px 10px;

@media (max-width: 1158px) {
    justify-content: center;
  }
`
