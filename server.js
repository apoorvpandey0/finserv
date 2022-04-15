const express = require("express");

const app = express();


app.use(express.json())

app.post('/bhfl', (req, res) => {

    let resp = {
        "user_id": "john_doe_17091999",
    }


    const data = req.body['data'];
    // console.log(data);
    let nums = [];
    let alphs = [];

    try {
        // sepaerate numbers and alphabets from list in javascript
        for (let i = 0; i < data.length; i++) {
            if (data[i] >= '0' && data[i] <= '9') {
                nums.push(data[i]);
            } else {
                alphs.push(data[i]);
            }
        }
        resp['numbers'] = nums;
        resp['alphabets'] = alphs;
        resp["email"] = "john@xyz.com",
            resp["roll_number"] = "ABCD123",
            resp['is_success'] = true;
    } catch (error) {
        resp['numbers'] = [];
        resp['alphabets'] = [];
        resp['is_success'] = false;

    }
    res.json(resp);

})

app.listen(3000)