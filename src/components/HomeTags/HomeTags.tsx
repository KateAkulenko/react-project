import React from 'react';
import style from './HomeTags.module.css';
import { useInView } from 'react-intersection-observer';

interface AnimatedTagProps {
  children: React.ReactNode;
  additionalClass?: string;
}

function AnimatedTag({ children, additionalClass = '' }: AnimatedTagProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <p ref={ref} className={`${style.tags} ${inView ? `${style.visible} ${additionalClass}` : ''}`}>
      {children}
    </p>
  );
}

function HomeTags() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.decoration}></div>
        <div className={style.tagsContainer}>
          <AnimatedTag>Transforming Thousands of Lives</AnimatedTag>
        </div>
      </div>
      <div className={style.reverse}>
        <div className={style.decorationReverse}></div>
        <div className={style.tagsContainer}>
          <AnimatedTag additionalClass={style.tagsReverse}>The best reviews in the industry</AnimatedTag>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.decoration}></div>
        <div className={style.tagsContainer}>
          <AnimatedTag>Qualified nutritionists with work experience</AnimatedTag>
        </div>
      </div>
    </div>
  );
}

export default HomeTags;
