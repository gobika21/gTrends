import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './ProductList.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function ProductList() {

    const [product, setProduct] = useState(8);
    const params = useParams();
    const { id } = params;
    
    const addToCart = (product) => {
        const arr = JSON.parse(localStorage.getItem('cartItem')) || [];
        arr.push(product);
        localStorage.setItem('cartItem', JSON.stringify(arr));
    }

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.in/api/products/${id}`)
                .then(res => res.json())
                .then(res => {
                    setProduct(res.product);
                })
        }
    }, [id]);

    return product && (
        <Container size="md">
            <div className={classes.inner}>
                <Image src={product.image} className={classes.image} height={220} />

                <div className={classes.content}>
                    <Title className={classes.title}>
                        {product.title}
                    </Title>
                    <Text c="dimmed" mt="md">
                        {product.description}
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                    >
                        <List.Item>
                            <b>Price</b> – ${product.price}
                        </List.Item>
                        <List.Item>
                            <b>Model</b> – {product.model}
                        </List.Item>
                        <List.Item>
                            <b>Color</b> – {product.color}
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button variant="default" radius="xl" size="md" className={classes.control} onClick={() => addToCart(product)}>
                            Add to Cart
                        </Button>
                    </Group>
                </div>
            </div>
        </Container>
    );
}

export default ProductList;