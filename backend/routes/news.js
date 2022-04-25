const request = require("request");
const https = require("https");

const router = require("express").Router();

router.post("/subscribe", (req, res) => {
    const email = req.body.email;
    const mcData = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }
    mcDataPost = JSON.stringify(mcData);
    const url = 'https://us14.api.mailchimp.com/3.0/lists/0b88928984';
    const options = {
        method: 'POST',
        auth: 'khatab1:6612b23453a24ed9dcc3508a38c837df-us14'
    }
    if (email) {
        const request = https.request(url, options, (response) => {
            response.on("data", function (data) {
                data = JSON.parse(data);
                if (data.error_count) {
                    res.status(500).send({message: data.errors[0].error});
                }else{
                    res.status(200).send({message: 'success'});
                }
            });
        })
        request.write(mcDataPost);
        request.end();
    } else {
        res.status(404).send({message: 'Failed'});
    }
});

module.exports = router;