class SearchDemo {

    // Linear Search
    static Product linearSearch(Product[] products, int id) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == id) {
                return products[i];
            }
        }
        return null;
    }

    // Binary Search
    static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Book", "Education"),
            new Product(105, "Watch", "Accessories")
        };

        int searchId = 104;

        System.out.println("Linear Search:");
        Product p1 = linearSearch(products, searchId);
        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        System.out.println("\nBinary Search:");
        Product p2 = binarySearch(products, searchId);
        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");
    }
}