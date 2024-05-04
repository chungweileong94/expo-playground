import { StyleSheet, View } from "react-native";

function ItemSkeleton() {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImage} />
      <View style={styles.itemContentWrapper}>
        <View style={styles.itemTitle} />
        <View style={styles.itemDesc} />
      </View>
    </View>
  );
}

export function ProductListSkeleton() {
  return (
    <View style={styles.container}>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
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
    backgroundColor: "lightgray",
  },
  itemTitle: {
    height: 18,
    width: 120,
    borderRadius: 24,
    backgroundColor: "lightgray",
  },
  itemDesc: {
    height: 28,
    width: "100%",
    borderRadius: 24,
    backgroundColor: "lightgray",
  },
});
