import style from './Posts.module.css';
import React, { useEffect } from 'react';

const Posts: React.FC = () => {
  function test() {
    (function () {
      // DON'T EDIT BELOW THIS LINE
      const d = document,
        s = d.createElement('script');
      s.src = 'https://reactproject.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date() as any);
      (d.head || d.body).appendChild(s);
    })();
  }
  useEffect(() => {
    test();
  }, []);
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Reviews</h2>
      <div id="disqus_thread"></div>
      <script></script>
    </div>
  );
};

export default Posts;
