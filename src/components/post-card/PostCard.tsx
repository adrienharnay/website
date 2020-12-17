import Link from 'next/link';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import { getSortedPostsData } from 'src/utils/posts';

import styles from './PostCard.module.scss';

type PostCardProps = {
  post: ReturnType<typeof getSortedPostsData>[number];
};

const PostCard: FunctionComponent<PostCardProps> = ({ post }) => (
  <article className={styles.container}>
    <Link href={`/${post.id}`}>
      <a className={styles.linkContainer}>
        <div className={styles.imgBlock}>
          <Image
            src={post.cover}
            layout="fill"
            alt={post.cover.split('/').slice(-1)[0].split('.')[0]}
          />
        </div>
        <div className={styles.contentBlock}>
          <h2 className={styles.title}>{post.title}</h2>
          {post.date && (
            <section className={styles.date}>
              <time>{post.date}</time>
            </section>
          )}
          <section className={styles.excerpt}>
            <p className={styles.paragraph}>{post.excerpt}</p>
          </section>
        </div>
      </a>
    </Link>
  </article>
);

export default PostCard;
