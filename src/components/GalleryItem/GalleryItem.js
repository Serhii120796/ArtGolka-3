import {
  Item,
  Watermark,
  GalleryImgWrapper,
  GalleryWrapper,
  Sketch,
} from './GalleryItem.styled';


const price = {
  beads: 17,
  halfBeads: 10,
  luxe: 19,
  shs: 7,
  tnA2: 340,
  tnA3: 170,
  tnA3plus: 220,
  tnA4: 95,
  tnA4plus: 100,
  tnA5: 50,
  tnP2060: 170,
};

const description = {
  tnA2: '(Розмір 40х60 см)',
  tnA3: '(Розмір 30х40 см)',
  tnA3plus: '(Розмір 35х40 см)',
  tnA4: '(Розмір 20х30 см)',
  tnA4plus: '(Розмір 20х33 см)',
  tnA5: '(Розмір 15х20 см)',
  tnP2060: '(Розмір 20х60 см)',
};

export const GalleryItem = ({ item: { article, type, img, sketch } }) => {
  return (
    <Item>
      <GalleryImgWrapper>
        <img
          src="../../images/catalog/tn/a5/tn5005.jpg"
          alt={article}
          width="300"
          height="461"
          loading="lazy"
        />
        {sketch && (
          <Sketch src={sketch} alt="sketch" width="60" loading="lazy" />
        )}
      </GalleryImgWrapper>
      <Watermark>ArtGolka</Watermark>
      <GalleryWrapper>
        <h3>{article}</h3>
        <p>
          Ціна {price[type]} грн. {description[type]}
        </p>
        {/* {costBeadsDesc}
                {costSHSDesc} */}
      </GalleryWrapper>
    </Item>
  );
};
