import { useState } from "react";
import EditProductModal from "./EditProductModal";
import Swal from "sweetalert2";

const products = [
  {
    id: 1,
    name: "Adjustable Dumbbells",
    price: 150,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Yoga Mat",
    price: 30,
    category: "Yoga & Pilates",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Treadmill",
    price: 800,
    category: "Cardio Equipment",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Kettlebell Set",
    price: 100,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Resistance Bands",
    price: 20,
    category: "Yoga & Pilates",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Exercise Bike",
    price: 500,
    category: "Cardio Equipment",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Foam Roller",
    price: 25,
    category: "Recovery Tools",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Rowing Machine",
    price: 700,
    category: "Cardio Equipment",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Pull-Up Bar",
    price: 40,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Medicine Ball",
    price: 50,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Pull-Up Bar",
    price: 40,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Medicine Ball",
    price: 50,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Pull-Up Bar",
    price: 40,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
  {
    name: "Medicine Ball",
    price: 50,
    category: "Strength Training",
    actions: ["Add to Cart", "View Details"],
  },
];

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product: any) => {
    setIsModalOpen(true);
    console.log("update product");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   // Dispatch the action to delete the product
        //   dispatch(deleteProduct(id));

        //   swal.fire(
        //     "Deleted!",
        //     "Your product has been deleted.",
        //     "success"
        //   );
        console.log("delete product ");
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EditProductModal
          product={products}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductList;
