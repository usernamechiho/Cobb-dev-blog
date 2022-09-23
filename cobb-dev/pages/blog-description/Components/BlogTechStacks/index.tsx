import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import styles from './blogTechStacks.module.scss';

const FRONT_STACKS = [
  {
    tech: 'Next.js',
    src: '/imgs/NEXT.png',
    desc: 'SEO, SSG를 이용하기 위해 리액트 프레임워크를 채택했습니다.',
  },
  {
    tech: 'Material UI',
    src: '/imgs/materialUI.png',
    desc: '디자인 라이브러리를 사용했습니다.',
  },
];

const BACK_STACKS = [
  {
    tech: 'Strapi (Headless CMS)',
    src: '/imgs/strapi.png',
    desc: 'Headless CMS를 사용해 데이터베이스를 구축했습니다.',
  },
  {
    tech: 'MySQL',
    src: '/imgs/mysql.png',
    desc: '관계형 데이터베이스 관리 시스템을 사용 중입니다.',
  },
];

function BlogTechStacks() {
  return (
    <div className={styles.blogTechContainer}>
      <Card sx={{ width: '300px', height: '530px' }}>
        {FRONT_STACKS.map((stack) => (
          <React.Fragment key={stack.desc}>
            <CardMedia
              component='img'
              alt={`${stack.tech}`}
              height='100'
              image={`${stack.src}`}
              style={{
                objectFit: 'contain',
                marginTop: '30px',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {stack.tech}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {stack.desc}
              </Typography>
            </CardContent>
          </React.Fragment>
        ))}
      </Card>

      <Card className={styles.backCards}>
        {BACK_STACKS.map((stack) => (
          <React.Fragment key={stack.desc}>
            <CardMedia component='img' alt={`${stack.tech}`} height='120' image={`${stack.src}`} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {stack.tech}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {stack.desc}
              </Typography>
            </CardContent>
          </React.Fragment>
        ))}
      </Card>
    </div>
  );
}

export default BlogTechStacks;
