const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')

const port = process.env.PORT || 3000;

dotenv.config()
require('./DB/conn')
app.use(express.json())
app.use(cors())
    // app.use(
    //     express.urlencoded({ extended: true })
    // );



// routes
const foodModels = require('./modules/Food')
    // app.get("/", async(req, res) => {
    //     const food = new foodModels({ foodName: "Apple", daySinceAt: 5 })

//     try {
//         await food.save().then(() => {
//             console.log("data has saved successfully");
//         }).catch(err => { console.log("there is an error" + err); })
//     } catch (error) {
//         console.log("error: " + error);
//     }
// })
app.post("/insert", async(req, res) => {
    const { foodName, daySinceAt } = req.body
    console.log(foodName + daySinceAt);
    const food = new foodModels({ foodName: foodName, daySinceAt: daySinceAt })

    try {
        await food.save().then(() => {
            console.log("data has saved successfully");
            res.status(200).json({ message: "inserted successfully" })
        }).catch(err => { console.log("there is an error" + err); })
    } catch (error) {
        console.log("error: " + error);
        res.status(403).json({ message: "there is an error" })
    }
})
app.get("/read", async(req, res) => {
    foodModels.find({}, (err, result) => {
        if (err) {
            // console.log("error: " + err);
            res.send(err)
        } else {
            res.send(result)
                // console.log(result);

        }
    })
})


// updatae
app.put("/update", async(req, res) => {
    // const { newfoodName, id } = req.body;
    const newfoodName = req.body.newFoodName;
    const id = req.body.id;
    console.log(newfoodName + id);



    try {
        await foodModels.findById(id, (err, updatedfood) => {
            if (err) {
                console.log("the error");
                throw err
            }
            updatedfood.foodName = newfoodName;
            updatedfood.save().then(() => {
                console.log("updated successfully");
            }).catch(err => { console.log("occuring some errors while updating" + err); });
        })

    } catch (error) {
        console.log("error: " + error);
        res.status(403).json({ message: "there is an error" })
    }
})

app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    await foodModels.findByIdAndRemove(id).exec()
    res.send("Delete success")
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});