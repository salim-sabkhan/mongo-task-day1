// Find all the information about each products

db.collection.find({},
    {
      _id: 0,
      "product_name": 1,
      "product_price": 1,
      "product_material": 1,
      "product_color": 1
    })

[
    {
      "product_color": "mint green",
      "product_material": "Concrete",
      "product_name": "Intelligent Fresh Chips",
      "product_price": 655
    },
    {
      "product_color": "indigo",
      "product_material": "Cotton",
      "product_name": "Practical Fresh Sausages",
      "product_price": 911
    },
    {
      "product_color": "gold",
      "product_material": "Rubber",
      "product_name": "Refined Steel Car",
      "product_price": 690
    },
    {
      "product_color": "plum",
      "product_material": "Soft",
      "product_name": "Gorgeous Plastic Pants",
      "product_price": 492
    },
    {
      "product_color": "black",
      "product_material": "Fresh",
      "product_name": "Sleek Cotton Chair",
      "product_price": 33
    },
    {
      "product_color": "orange",
      "product_material": "Plastic",
      "product_name": "Awesome Wooden Towels",
      "product_price": 474
    },
    {
      "product_color": "pink",
      "product_material": "Rubber",
      "product_name": "Practical Soft Shoes",
      "product_price": 500
    },
    {
      "product_color": "violet",
      "product_material": "Rubber",
      "product_name": "Incredible Steel Hat",
      "product_price": 78
    },
    {
      "product_color": "azure",
      "product_material": "Soft",
      "product_name": "Awesome Wooden Ball",
      "product_price": 28
    },
    {
      "product_color": "indigo",
      "product_material": "Frozen",
      "product_name": "Generic Wooden Pizza",
      "product_price": 84
    },
    {
      "product_color": "black",
      "product_material": "Soft",
      "product_name": "Unbranded Wooden Cheese",
      "product_price": 26
    },
    {
      "product_color": "pink",
      "product_material": "Wooden",
      "product_name": "Unbranded Plastic Salad",
      "product_price": 89
    },
    {
      "product_color": "sky blue",
      "product_material": "Concrete",
      "product_name": "Gorgeous Cotton Keyboard",
      "product_price": 37
    },
    {
      "product_color": "white",
      "product_material": "Metal",
      "product_name": "Incredible Steel Shirt",
      "product_price": 54
    },
    {
      "product_color": "mint green",
      "product_material": "Rubber",
      "product_name": "Ergonomic Cotton Hat",
      "product_price": 43
    },
    {
      "product_color": "teal",
      "product_material": "Cotton",
      "product_name": "Small Soft Chair",
      "product_price": 47
    },
    {
      "product_color": "indigo",
      "product_material": "Fresh",
      "product_name": "Incredible Metal Car",
      "product_price": 36
    },
    {
      "product_color": "yellow",
      "product_material": "Steel",
      "product_name": "Licensed Plastic Bacon",
      "product_price": 88
    },
    {
      "product_color": "azure",
      "product_material": "Soft",
      "product_name": "Intelligent Cotton Chips",
      "product_price": 46
    },
    {
      "product_color": "lime",
      "product_material": "Concrete",
      "product_name": "Handcrafted Wooden Bacon",
      "product_price": 36
    },
    {
      "product_color": "gold",
      "product_material": "Metal",
      "product_name": "Unbranded Granite Chicken",
      "product_price": 90
    },
    {
      "product_color": "black",
      "product_material": "Rubber",
      "product_name": "Ergonomic Soft Hat",
      "product_price": 99
    },
    {
      "product_color": "azure",
      "product_material": "Cotton",
      "product_name": "Intelligent Steel Pizza",
      "product_price": 95
    },
    {
      "product_color": "orchid",
      "product_material": "Frozen",
      "product_name": "Tasty Rubber Cheese",
      "product_price": 47
    },
    {
      "product_color": "indigo",
      "product_material": "Cotton",
      "product_name": "Licensed Steel Car",
      "product_price": 20
    }
  ]

// List the four product which are grater than 500 in price

db.collection.find({product_price: {"$gte": 500}})

[
    {
      "_id": ObjectId("5a934e000102030405000000"),
      "id": "1",
      "product_color": "mint green",
      "product_material": "Concrete",
      "product_name": "Intelligent Fresh Chips",
      "product_price": 655
    },
    {
      "_id": ObjectId("5a934e000102030405000001"),
      "id": "2",
      "product_color": "indigo",
      "product_material": "Cotton",
      "product_name": "Practical Fresh Sausages",
      "product_price": 911
    },
    {
      "_id": ObjectId("5a934e000102030405000002"),
      "id": "3",
      "product_color": "gold",
      "product_material": "Rubber",
      "product_name": "Refined Steel Car",
      "product_price": 690
    },
    {
      "_id": ObjectId("5a934e000102030405000006"),
      "id": "7",
      "product_color": "pink",
      "product_material": "Rubber",
      "product_name": "Practical Soft Shoes",
      "product_price": 500
    }
  ]


//   Find the product name and product material of each products


db.collection.find({},
    {"_id": 0,
      "id": 1,
      "product_price": 1,
      "product_color": 1
    })

    [
        {
          "id": "1",
          "product_color": "mint green",
          "product_price": 655
        },
        {
          "id": "2",
          "product_color": "indigo",
          "product_price": 911
        },
        {
          "id": "3",
          "product_color": "gold",
          "product_price": 690
        },
        {
          "id": "4",
          "product_color": "plum",
          "product_price": 492
        },
        {
          "id": "5",
          "product_color": "black",
          "product_price": 33
        },
        {
          "id": "6",
          "product_color": "orange",
          "product_price": 474
        },
        {
          "id": "7",
          "product_color": "pink",
          "product_price": 500
        },
        {
          "id": "8",
          "product_color": "violet",
          "product_price": 78
        },
        {
          "id": "9",
          "product_color": "azure",
          "product_price": 28
        },
        {
          "id": "10",
          "product_color": "indigo",
          "product_price": 84
        },
        {
          "id": "11",
          "product_color": "black",
          "product_price": 26
        },
        {
          "id": "12",
          "product_color": "pink",
          "product_price": 89
        },
        {
          "id": "13",
          "product_color": "sky blue",
          "product_price": 37
        },
        {
          "id": "14",
          "product_color": "white",
          "product_price": 54
        },
        {
          "id": "15",
          "product_color": "mint green",
          "product_price": 43
        },
        {
          "id": "16",
          "product_color": "teal",
          "product_price": 47
        },
        {
          "id": "17",
          "product_color": "indigo",
          "product_price": 36
        },
        {
          "id": "18",
          "product_color": "yellow",
          "product_price": 88
        },
        {
          "id": "19",
          "product_color": "azure",
          "product_price": 46
        },
        {
          "id": "20",
          "product_color": "lime",
          "product_price": 36
        },
        {
          "id": "21",
          "product_color": "gold",
          "product_price": 90
        },
        {
          "id": "22",
          "product_color": "black",
          "product_price": 99
        },
        {
          "id": "23",
          "product_color": "azure",
          "product_price": 95
        },
        {
          "id": "24",
          "product_color": "orchid",
          "product_price": 47
        },
        {
          "id": "25",
          "product_color": "indigo",
          "product_price": 20
        }
      ]    

// Find the product with a row id of 10

  db.collection.find({"id": "10"})

  [
    {
      "_id": ObjectId("5a934e000102030405000009"),
      "id": "10",
      "product_color": "indigo",
      "product_material": "Frozen",
      "product_name": "Generic Wooden Pizza",
      "product_price": 84
    }
  ]

  //   Find only the product name and product material 

db.collection.find({},
    {
      _id: 0,
      "product_name": 1,
      "product_material": 1
    })

    [
        {
          "product_material": "Concrete",
          "product_name": "Intelligent Fresh Chips"
        },
        {
          "product_material": "Cotton",
          "product_name": "Practical Fresh Sausages"
        },
        {
          "product_material": "Rubber",
          "product_name": "Refined Steel Car"
        },
        {
          "product_material": "Soft",
          "product_name": "Gorgeous Plastic Pants"
        },
        {
          "product_material": "Fresh",
          "product_name": "Sleek Cotton Chair"
        },
        {
          "product_material": "Plastic",
          "product_name": "Awesome Wooden Towels"
        },
        {
          "product_material": "Rubber",
          "product_name": "Practical Soft Shoes"
        },
        {
          "product_material": "Rubber",
          "product_name": "Incredible Steel Hat"
        },
        {
          "product_material": "Soft",
          "product_name": "Awesome Wooden Ball"
        },
        {
          "product_material": "Frozen",
          "product_name": "Generic Wooden Pizza"
        },
        {
          "product_material": "Soft",
          "product_name": "Unbranded Wooden Cheese"
        },
        {
          "product_material": "Wooden",
          "product_name": "Unbranded Plastic Salad"
        },
        {
          "product_material": "Concrete",
          "product_name": "Gorgeous Cotton Keyboard"
        },
        {
          "product_material": "Metal",
          "product_name": "Incredible Steel Shirt"
        },
        {
          "product_material": "Rubber",
          "product_name": "Ergonomic Cotton Hat"
        },
        {
          "product_material": "Cotton",
          "product_name": "Small Soft Chair"
        },
        {
          "product_material": "Fresh",
          "product_name": "Incredible Metal Car"
        },
        {
          "product_material": "Steel",
          "product_name": "Licensed Plastic Bacon"
        },
        {
          "product_material": "Soft",
          "product_name": "Intelligent Cotton Chips"
        },
        {
          "product_material": "Concrete",
          "product_name": "Handcrafted Wooden Bacon"
        },
        {
          "product_material": "Metal",
          "product_name": "Unbranded Granite Chicken"
        },
        {
          "product_material": "Rubber",
          "product_name": "Ergonomic Soft Hat"
        },
        {
          "product_material": "Cotton",
          "product_name": "Intelligent Steel Pizza"
        },
        {
          "product_material": "Frozen",
          "product_name": "Tasty Rubber Cheese"
        },
        {
          "product_material": "Cotton",
          "product_name": "Licensed Steel Car"
        }
      ]




//   Find all products which contain the value of soft in product material

db.collection.aggregate([
    {$match: {"product_material": "Soft"}}
])

[
    {
      "_id": ObjectId("5a934e000102030405000003"),
      "id": "4",
      "product_color": "plum",
      "product_material": "Soft",
      "product_name": "Gorgeous Plastic Pants",
      "product_price": 492
    },
    {
      "_id": ObjectId("5a934e000102030405000008"),
      "id": "9",
      "product_color": "azure",
      "product_material": "Soft",
      "product_name": "Awesome Wooden Ball",
      "product_price": 28
    },
    {
      "_id": ObjectId("5a934e00010203040500000a"),
      "id": "11",
      "product_color": "black",
      "product_material": "Soft",
      "product_name": "Unbranded Wooden Cheese",
      "product_price": 26
    },
    {
      "_id": ObjectId("5a934e000102030405000012"),
      "id": "19",
      "product_color": "azure",
      "product_material": "Soft",
      "product_name": "Intelligent Cotton Chips",
      "product_price": 46
    }
  ]









