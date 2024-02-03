//data
import list from './Social.data';

//style
import style from './social.module.css';

// Social component renders a list of social media icons with links
function Social() {
  return (
    <ul className={style.social}>
      {/* Map through the list array to generate social media icons */}
      {list.map((item, index) => {
        return (
          <li key={'list item - ' + item + index}>
            {/* Anchor tag for the social media link */}
            <a
              href={item.url}
              className={style.link}
              title={item.title}
              target="_blank"
              rel="noreferrer"
            >
              {/* SVG icon for the social media platform */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                {/* Path of the SVG icon based on the item's path property */}
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
