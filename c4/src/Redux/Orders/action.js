export const ORDERS = "Orders"
export const SORT = "SORT"

export const orders = (data)=>{
    return {
        type:ORDERS,
        payload : data
    }
}

export const getOrders = ()=>async(dispatch)=>{
    const data = await fetch("http://localhost:8080/orders").then((x)=>x.json());
    // console.log(data)
    dispatch(orders(data))
}

export const Sort = (id)=>{
    return {
        type : SORT,
        payload : id
    }
}

