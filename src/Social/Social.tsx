//*data
import list from './Social.data';

//*style
import style from './social.module.css';

function Social() {
  return (
    <ul className={style.social}>
      {list.map((item, index) => {
        return (
          <li key={'list item - ' + item + index}>
            <a
              href={item.url}
              className={style.link}
              title={item.title}
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
