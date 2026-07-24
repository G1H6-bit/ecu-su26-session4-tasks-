function calculateShipping(weight) {

    return new Promise(function(resolve, reject) {

        if (weight > 0) {

            let cost = weight * 5;
            resolve("Shipping Cost: " + cost);

        } else {

            reject("Invalid weight");

        }

    });

}

calculateShipping(10)
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});