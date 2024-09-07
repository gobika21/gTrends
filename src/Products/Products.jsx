import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, Group, Badge } from '@mantine/core';
import classes from './Products.module.css';
import ProductList from '../ProductList/ProductList';

export function Products() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = [1, 2, 3, 4, 5].map((item) => (
        <Carousel.Slide key={item.title} className={classes.productCarousel}>
            <ProductList />
        </Carousel.Slide>
    ));

    return (
        <>
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Top products
                </Badge>
            </Group>
            <br />
            <Carousel
                slideSize="50%" slideGap="xl" controlsOffset="xs" controlSize={40} loop dragFree withIndicators
            >
                {slides}
            </Carousel>
        </>
    );
}

export default Products;