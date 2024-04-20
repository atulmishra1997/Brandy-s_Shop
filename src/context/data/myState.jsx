import React, { useState } from 'react'
import MyContext from './myContext'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
import { useEffect } from 'react';

function myState(props) {
    const [mode, setMode] = useState("light");
    const [loading, setLoading] = useState(false);

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "rgb(17, 24, 29)"
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white"
        }
    }


    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            'en-in',{month: 'short', day: '2-digit', year: 'numeric'}
        )
    });

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error('All fields are required')
        }
        setLoading(true)

        try {
            const productRef = collection(fireDB, "products");
            await addDoc(productRef, products);
            toast.success("Product added successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 5000)
            getProductData();
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        // setProducts("")
    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {

        setLoading(true);

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({...doc.data(), id: doc.id})
                });
                setProduct(productArray)
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData()
    },[]);

    //Update the product function
    const editHandle = (item) => {
        setProducts(item)
    }

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, "products", products.id), products);
            toast.success("Product updated successfully");
            getProductData();
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 5000);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Delete a product function

    const deleteProduct = async (item) => {
    setLoading(true);
    try {
        await deleteDoc(doc(fireDB, "products", item.id));
        toast.success("Product deleted successfully");
        getProductData();
        // window.location.href = '/dashboard'
        setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

const [order, setOrder] = useState([]);

    const getOrderData = async () => {
    setLoading(true)
    try {
        const result = await getDocs(collection(fireDB, "orders"))
        const ordersArray = [];
        result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
        });
        setOrder(ordersArray);
        console.log(ordersArray)
        setLoading(false);
        } catch (error) {
        console.log(error)
        setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            console.log(usersArray);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }


    useEffect(() => {
        // getProductData();
        getOrderData();
        getUserData();

    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')


    
    return (
        <MyContext.Provider value={{mode, toggleMode, loading, setLoading, products, setProducts, 
            addProduct, product, editHandle, updateProduct, deleteProduct, order, user, searchkey, 
            setSearchkey,filterType, setFilterType,filterPrice, setFilterPrice}}>
            {props.children}</MyContext.Provider>
    )
}

export default myState