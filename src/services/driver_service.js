import { myAxios } from "./helper";

export const getDrivers=async ()=>{
    const response = await myAxios.get('api/driver/');
    return response;
}
export const getDriver = async (id) => {
    const response = await myAxios.get(`api/driver/${id}`);
    return response;
};

export const updateOrderStatus=async (Data)=> {
    var pickup="";
    var dropoff="";
    
     if(Data.pickuplatitude!==undefined){
        pickup=Data.pickuplatitude+","+Data.pickuplongitude;
        dropoff=Data.dropOffLatitude+","+Data.dropOffLongitude;
 
    }
    else{
     pickup=Data.pickUp;
     dropoff=Data.dropOff;
    }
     Data.size=parseInt(Data.size);
     Data.weight=parseInt(Data.weight);
     let data={
         "orderId": Data.orderId,
         "orderName": Data.orderName,
         "noOfLabors": Data.noOfLabors,
         "totalWeight": Data.weight,
         "totalSize": Data.size,
         "paymentStatus": Data.paymentStatus,
         "fragility": false,
         "status": {
             "statusId": "4",
             "status": "delivered"
         },
         "price": Data.price,
         "client": {
             "id": Data.client.id,
             "userName": "cent1",
             "password": "mypassword",
             "phoneNumber": "1234567890",
             "cnic": 1234567890123,
             "companyName": "company"
         },
         "driver": {
             "id": Data.driver.id,
             "userName": "funny_driver",
             "password": "2323",
             "phoneNumber": "24433232332",
             "cnic": 434343434434,
             "licenseNumber": "232332",
             "yearsOfExperience": 32,
             "salary": 23232,
             "foodCost": 2323,
             "status": {
                 "statusId": 1,
                 "status": "busy"
             },
             "vehicle": {
                 "vehicleId": 6,
                 "name": "formevehicle",
                 "maxWeightCarry": 3434,
                 "mileage": 3434.0,
                 "plateNo": "V234",
                 "cost": {
                     "maintenanceCost": 645.0,
                     "fuelCost": 434.0
                 },
                 "vtype": {
                     "typeId": 3,
                     "typeName": "container"
                 },
                 "status": {
                     "statusId": 4,
                     "status": "assigned"
                 }
             }
         },
         "payment": {
             "paymentId": Data.paymentId,
             "paymentMode": Data.paymentMode
         },
         "pickUp": pickup,
         "dropOff": dropoff,
         "estimatedArrivalOfGoods": null,
         "schedule": Data.schedule||null
     }
 
     console.log("Value Of Data: "+JSON.stringify(data)+"Ends Here")
     const response=myAxios.put(`api/orders/${Data.orderId}`,data);
     return response;
 }

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

export const login=async (userDetail)=>{
    const userDetailsString = JSON.stringify(userDetail);
    const userDetails = JSON.parse(userDetailsString);
    // const data={
    //     "userName": "d",
    //     "password":"kjjjkjk",
    // };
    const data={
        "userName": userDetails.username,
        "password":userDetails.password,
    };
    console.log(data);
    const response = await myAxios.post('api/driver/login',data);
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

export const updateDriver=async (driver)=>{
    
    data={
            "id": driver.id,
            "userName": driver.userName,
            "password": driver.password,
            "phoneNumber": driver.phoneNumber,
            "cnic": parseInt(driver.cnic),
            "licenseNumber": driver.licenseNumber,
            "yearsOfExperience": parseInt(driver.yearsOfExperience),
            "salary": parseInt(driver.salary),
            "foodCost": parseInt(driver.foodCost),
            "vehicle": {
                "vehicleId": driver.vehicle.vehicleId,
                "name": "giant container",
                "maxWeightCarry": 454,
                "minWeightCarry": null,
                "maxSizeCarry": null,
                "mileage": 56.0,
                "plateNo": "API-108",
                "cost": {
                    "maintenanceCost": 3434.6,
                    "fuelCost": 534.0
                },
                "vtype": {
                    "typeId": 2,
                    "typeName": "bulk",
                    "cost": null
                },
                "status": {
                    "statusId": 4,
                    "status": "assigned"
                }
            },
            "status": {
                "statusId": driver.status.statusId,
                "status": driver.status.status
         
            },
            "location": driver.location
        }
    const response=myAxios.put(`api/driver/${driver.id}`,data);
    return response;
}

