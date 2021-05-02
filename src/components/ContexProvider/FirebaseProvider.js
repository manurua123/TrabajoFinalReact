import firebase from "firebase/app";
import React, { useState } from "react";
import { getFirestore } from "../../configs/firebase";
import "firebase/firestore";
import FirebaseContex from '../../context/FirebaseContext'


function FirebaseProvider(props) {
    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState();


    const getAll = async () => {
        const productos = await db.collection("productos").get();
        const prod = []
        productos.forEach((doc) => {
            prod.push(doc.data());

        });
        return prod;
    }

    const getCategorias = async () => {
        const productos = await db.collection("categorias").get();
        const cat = []
        productos.forEach((doc) => {
            cat.push(doc.id)
        });
        return cat;
    }
  
    const getById = async (id) => {
        const docRef = await db.collection("productos").doc(id).get().then((doc) => {
            if (doc.exists) {
               
                return( doc.data())
            } else {
                console.log("No such document!");
                return(false)
            }
        });
        return(docRef)
    }



    function createOrder(datos) {
        const productos = []
        datos.cart.cart.map((i) => {
            productos.push({ id: i[0].title, price: i[0].price, quantity: i[1] })
        })
        const newOrder = {
            user: { nombre: datos.nombre, telefono: datos.telefono, email: datos.email },
            products: productos,
            state: 'generada',
            total: datos.cart.PrecioTotal(),
            createOn: firebase.firestore.Timestamp.fromDate(new Date()),
        };
        const orders = db.collection("orders");
        orders.add(newOrder).then((resp) => {
            setLastId(resp.id);
        })
    }

    function actualizarStock(datos) {
        datos.cart.map((c) => {
            var stockAct = {}
            const producto = db.collection("productos").doc(c[0].title)
            producto.get().then((i) => {
                if (i.exists) {
                    stockAct = { stock: (i.data().stock - c[1]) }
                    producto.update(stockAct)
                }
            });

        })
    }

    function viewOrder(id) {
        const productos = db
            .collection("productos")
            .doc(id);
        productos.get().then((res) => {
            console.log(res.data());
        });
    }

    const { children } = props;
    return (
        <FirebaseContex.Provider value={{
            lastId: lastId,
            getAll: getAll,
            createOrder: createOrder,
            actualizarStock: actualizarStock,
            viewOrder: viewOrder,
            getCategorias: getCategorias,
            getById: getById,

        }}>
            {children}
        </FirebaseContex.Provider>
    )
}





export default FirebaseProvider;