import axios from 'axios';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();

    // add place to database
    const onSubmit = data => {
        console.log(data);
         axios.post('http://localhost:5000/addProduct', data)
             .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        // add place route
        <div className="d-flex justify-content-center align-items-center">

            <form className="add-place-container md-w-100" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Item Name" {...register("name")} />
                <textarea placeholder="Some Text About The Item" {...register("desc")} />
                <input placeholder='Item Price' {...register("price")} />
                <input placeholder="supplier name" {...register("supplier")} />
                <input placeholder="quantity" {...register("quantity")} />
                <input placeholder="Image URL" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;