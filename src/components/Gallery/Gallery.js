import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import products from '../../products.json';
import { Container, GalleryList } from './Gallery.styled';


export const Gallery = () => {
    return (
        <section>
        <Container>
          <GalleryList>
            {products.map(product => <GalleryItem key={product.id} item={product} />)}
          </GalleryList>
        </Container>
      </section>
    )
}