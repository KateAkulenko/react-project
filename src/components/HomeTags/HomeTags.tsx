//style
import style from './HomeTags.module.css';
//base
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Interface for the props of AnimatedTag component
interface AnimatedTagProps {
  children: React.ReactNode;
  additionalClass?: string;
}
// AnimatedTag component that works its content when it comes into view
function AnimatedTag({ children, additionalClass = '' }: AnimatedTagProps) {
  // useInView hook to track whether the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    // Apply styles conditionally based on whether the component is in view
    <p
      ref={ref}
      className={`${style.tags} ${
        inView ? `${style.visible} ${additionalClass}` : ''
      }`}
    >
      {children}
    </p>
  );
}
// HomeTags component that displays a set of animated tags
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
          <AnimatedTag additionalClass={style.tagsReverse}>
            The best reviews in the industry
          </AnimatedTag>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.decoration}></div>
        <div className={style.tagsContainer}>
          <AnimatedTag>
            Qualified nutritionists with work experience
          </AnimatedTag>
        </div>
      </div>
    </div>
  );
}

export default HomeTags;
