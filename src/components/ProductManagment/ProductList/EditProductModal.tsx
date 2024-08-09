
const EditProductModal = ({ product, isOpen, onClose }) => {

  if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                defaultValue={product.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                defaultValue={product.price}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                defaultValue={product.category}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={onClose}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  

export default EditProductModal;