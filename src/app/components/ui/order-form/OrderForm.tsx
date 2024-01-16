'use client'
import { validationSchema } from '@/utils/validate-form';
import { useFormik } from 'formik';
import Button from '../button/Button';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { notiOrderSuccess, notifyOrderError } from '@/constants/toasts';
import { clearCart } from '@/store/card/cart.slice';
import { IInitialStateCatalog } from '@/store/card/cart.interface';
interface IOrderForm {}

export default function OrderForm({}: IOrderForm) {
  const router = useRouter()
const dispatch = useDispatch()
  const { cart } = useSelector((state: IInitialStateCatalog) => state.cart);
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
      },
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          const response = await fetch('/order/send', {
            method: 'POST',
            body: JSON.stringify({user: values, products: cart}),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            if(data.status === 'error'){
              return notifyOrderError(data.message);
            }
            notiOrderSuccess(data.message);
            console.log({user: values, products: cart})
            resetForm();
            dispatch(clearCart([]))
            if(data.status === 'success'){
              setTimeout(() => {
                handleContinueShopping()
              }, 2000)
            }
          } else {
            notifyOrderError(data.message);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      
    
      },
    });
    

  const handleContinueShopping = () => {
    if (cart.length > 0) {
      router.push('/');
    } else {
      router.push('/');
    }
  };
  
      return (
        <form onSubmit={formik.handleSubmit} className="w-11/12 mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-black text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full p-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-base mt-1">{formik.errors.name}</p>
            )}
          </div>
    
          <div className="mb-4">
            <label htmlFor="email" className="block text-black text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full p-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-base mt-1">{formik.errors.email}</p>
            )}
          </div>
    
          <div className="mb-4">
            <label htmlFor="phone" className="block text-black text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`w-full p-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-base mt-1">{formik.errors.phone}</p>
            )}
          </div>
    
          <div className='mt-[24px] flex justify-between'>
          <Button detailsPage type="submit">
              Сheckout
          </Button>
          <Button style={{width: '200px'}} continueShopping={true}  onClick={handleContinueShopping} >
                Continue Shopping
          </Button>
          </div>
        </form>
      );
}
