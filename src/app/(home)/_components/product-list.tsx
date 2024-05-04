import { FlashList } from "@shopify/flash-list";
import { Image, StyleSheet, Text, View } from "react-native";
import { suspensify } from "suspensify";
import { z } from "zod";

const productsAPIResponseSchema = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      price: z.number(),
      discountPercentage: z.number(),
      rating: z.number(),
      stock: z.number(),
      brand: z.string(),
      category: z.string(),
      thumbnail: z.string(),
      images: z.array(z.string()),
    }),
  ),
});

const fetchProducts = suspensify(async () => {
  const products = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => productsAPIResponseSchema.parse(json).products);
  return products;
});

export function ProductList() {
  const products = fetchProducts();
  return (
    <View style={styles.container}>
      <FlashList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={106}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image src={item.thumbnail} style={styles.itemImage} />
            <View style={styles.itemContentWrapper}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDesc} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  itemContentWrapper: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDesc: {
    fontSize: 14,
  },
});
