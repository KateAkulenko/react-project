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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d={item.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
