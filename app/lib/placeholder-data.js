// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter

const user = [
    {
        id : "",
        name : "Admin",
        email: "admin@9598.com",
        password: "123456"
    }
];

const collections = [
    {
        id : "",
        name: "The Genesis",
        description: "Description of the genesis collection",
        image_url: "",
        video_url: ""
    },
    {
        id : "",
        name: "The Sourjourner",
        description: "Description of the sourjourner collection",
        image_url: "",
        video_url: ""
    },
    
]

const wears = [
    {
        id: "",
        name: "",
        description: "",
        color: "",
        size: "",
        price: 100,
        availability: "in-stock",
        image_url: "",
        collection_id : collections[2].id,
    },
    {
        id: "",
        name: "",
        description: "",
        color: "",
        size: "",
        price: 100,
        availability: "in-stock",
        image_url: "",
        collection_id : collections[2].id,
    }
]


module.exports = {
    user,
    collections, 
    wears
};