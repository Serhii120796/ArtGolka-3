import css from 'styled-components';

export const Item = css.li`
position: relative;
  /* Для вирівнювання артикулів товару через різні розміри фото */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* /Для вирівнювання артикулів товару через різні розміри фото */
  background-color: #ffffff;
`

export const Watermark = css.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
/* text-transform: uppercase; */
font-family: 'Raleway', sans-serif;
font-size: 60px;
font-weight: 400;
letter-spacing: 0.05;
color: #372c2c;
opacity: 0.6;
`


export const GalleryImgWrapper = css.div`
position: relative;
`
    
export const GalleryWrapper = css.div`
  padding: 10px;
  text-align: center;
`
    
export const Sketch = css.img`
position: absolute;
  bottom: 0%;
  left: 0%;
  /* transition: transform var(--animation-duration) var(--timing-function); */
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* transform: scale(5); */
    width: 300px;
  }
`


