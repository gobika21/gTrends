import { Image, Card, Text, Group, Button, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import classes from './ProductList.module.css';
import useProductList from '../../services/useProductList';


const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

function ProductList() {

  const { products } = useProductList('category?type=mobile');

  console.log(products);

  const slides = products.map((item) => (
    <Carousel.Slide key={item.id}>
      <Image src={item.image} height={220} />
    </Carousel.Slide>
  ));

  return (
    products.map((item) => (
      <Card className={classes.productList} radius="md" withBorder padding="xl">
        <Card.Section>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {/* {slides} */}
            <Image src={item.image} height={220} />
          </Carousel>
        </Card.Section>

        <Group justify="space-between" mt="lg">
          <Text fw={500} fz="lg">
            {/* Forde, Norway */}
            {item.title}
          </Text>

          {/* <Group gap={5}>
            <IconStar style={{ width: rem(16), height: rem(16) }} />
            <Text fz="xs" fw={500}>
              4.78
              {item.discount}
            </Text>
          </Group> */}
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          {item.description}
        </Text>

        <Group justify="space-between" mt="md">
          <div>
            <Text fz="xl" span fw={500} className={classes.price}>
              {item.price}
            </Text>
            {/* <Text span fz="sm" c="dimmed">
            {' '}
            / night
          </Text> */}
          </div>

          <Button radius="md">Add to cart</Button>
        </Group>
      </Card>
    ))
  );
}

export default ProductList;