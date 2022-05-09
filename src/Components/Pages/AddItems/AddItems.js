import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const AddItems = () => {
    const { user} = useAuth();
    const { register, handleSubmit,reset } = useForm();

    // add place to database
    const onSubmit = data => {
        data.user = user.email;
        console.log(data);
         axios.post('https://enigmatic-savannah-54985.herokuapp.com/addProduct', data)
             .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        // add place route
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center p-4 rounded-2 shadow m-4 w-100">
                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control my-3' placeholder="Item Name" {...register("name")} />
                    <textarea className='form-control my-3' placeholder="Some Text About The Item" {...register("desc")} />
                    <input className='form-control my-3' placeholder='Item Price' {...register("price")} />
                    <input className='form-control my-3' placeholder="supplier name" {...register("supplier")} />
                    <input className='form-control my-3' placeholder="quantity" {...register("quantity")} />
                    <input className='form-control my-3' placeholder="Image URL" {...register("img")} />
                    <input
                        style={{ background: '#12C1AD', outline: 'none', color: '#FFC107' }}
                        className="bg-dark rounded-pill border-0 py-2 px-4 w-100"
                        type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;