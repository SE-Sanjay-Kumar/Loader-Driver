import { myAxios } from "./helper";

export const getDrivers=async ()=>{
    const response = await myAxios.get('api/driver/');
    return response;
}
export const getDriver = async (id) => {
    const response = await myAxios.get(`api/driver/${id}`);
    return response;
};
export const getOrders=async ()=>{
    const response = await myAxios.get('api/orders/');
    return response;
}
export const getClient=async (id)=>{
    const response = await myAxios.get(`api/orders/${id}`);
    return response;
}
export const getOrderById=async (id)=>{
    const response = await myAxios.get(`api/orders/${id}`);
    return response;
}
export const confirmDelivery=async (id)=>{
    console.log("from confirm Delivery"+id);
    const response = await myAxios.put(`api/orders/${id}`,{
        "status": {
                 "statusId": 4,
                 "status": "delivered"
             },
         
        "price": 300.0,
        "orderId": 1,
        "driver":  {
            "id": 6,
            "userName": "recent driver",
            "password": "213123",
            "phoneNumber": "234343343432",
            "cnic": 34343,
            "licenseNumber": "3432432",
            "yearsOfExperience": 342334324,
            "salary": 5345,
            "foodCost": 34344,
            "vehicle": {
                "vehicleId": 5,
                "name": "small container",
                "maxWeightCarry": 454,
                "mileage": 56.0,
                "plateNo": "API-122",
                "cost": {
                    "maintenanceCost": 3434.6,
                    "fuelCost": 534.0
                },
                "vtype": {
                    "typeId": 2,
                    "typeName": "bulk"
                },
                "status": {
                    "statusId": 2,
                    "status": "unassigned"
                }
            },
            "status": {
                "statusId": 3,
                "status": "available"
            }
        }
         }    
    );
    console.log(response.status);
    return response;
}

