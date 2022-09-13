import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Container/Container';
import Felicitation from './Felicitation/Felicitation';
import ImageCard from './ImageCard/ImageCard';
import { fetchTextId } from '../../store/textSlice';
import { fetchImageId } from '../../store/imageSlice';

import style from './Card.module.css'

const Card = () => {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText))
      dispatch(fetchImageId(idImg))
    }
  })

  return (
    <div className={style.card}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.image}>
            <ImageCard />
            <Felicitation />
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Card;