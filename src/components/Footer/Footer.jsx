import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as StumbleuponIcon } from "../../img/stumbleupon.svg";

const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p>Design: <a href="https://t.me/Mrshmallowww">Anastasia Ilina</a></p>
          <p>Сoder: <a href="https://t.me/Che6yPaIIIkA">Viktor Bogatenkov</a></p>
          <p>© HBCard, 2022</p>
        </div>

        <ul className={style.social}>
          <li className={style.social__item}>
            <a className={style.social__link} href="https://vk.com/id33667688">
              <VKIcon />
            </a>
          </li>
          <li className={style.social__item}>
            <a className={style.social__link} href="https://t.me/Che6yPaIIIkA">
              <TGIcon />
            </a>
          </li>
          <li className={style.social__item}>
            <a className={style.social__link} href="https://pinterest.com/">
              <PinterestIcon />
            </a>
          </li>
          <li className={style.social__item}>
            <a className={style.social__link} href="https://stumbleupon.com/">
              <StumbleuponIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
