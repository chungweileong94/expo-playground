import { Suspense } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductList } from "./_components/product-list";
import { ProductListSkeleton } from "./_components/product-list-skeleton";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
      </View>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
