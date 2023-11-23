import React, { useEffect,useState } from "react";
import axios from "axios";
const Form = () => {

    /**
     * It's great that you're comfortable using state here!
     * 
     * You don't have to worry about it straight away, but it's worth learning more about how forms
     * can be stateless. This means that you usually don't need `useState`, unless you want to update some other
     * part of the app as you type. 
     */
    const [userName, setUserName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [BankName, setBankName] = useState("");
    const [AccNumber, setAccNumber] = useState("");
    const [Items, setItems] = useState("");
    

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        /**
         * Axios is a great library, but nowadays you generaly don't need it.
         * 
         * You can use the browser native `fetch` instead:
         * 
         * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
         */
        var users = await axios.get('http://localhost:4000/users')
        getUser(users.data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            console.log("UserName:", userName,  "emailAdress:",emailAddress,"homeAdress:",homeAddress, "BankName:", BankName, "AccNumber:", AccNumber, "Items:", Items,);

        var user = await axios.post('http://localhost:4000/users', {
            userName,
            emailAddress,
            homeAddress,
            BankName,
            AccNumber,
            Items
        })
            .then(function (response) {
                console.log(response);
            })

            .catch(function (error) {
                console.log(error);
            });

            getUser()



    };

    
    return (
        <div className="Signup" id="form">
            <h2>Signup</h2>
            <h4>Savor the Flavor: Sign Up for Culinary Delights!</h4>

            <div className="form" >
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    placeholder="Enter your userName"
                    name="userName"
                    className="form-control"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="text"
                    placeholder="Enter your Email Address"
                    name="emailAddress"
                    className="form-control"
                    id="emailAddress"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />

                <br />
                <label htmlFor="homeAddress">Home Address</label>
                <input
                    type="text"
                    placeholder="Enter your home address"
                    name="homeAddress"
                    className="form-control"
                    id="homeAddress"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                />

                <br />

                <label htmlFor="Bank Name">Bank Name</label>
                <input
                    type="text"
                    placeholder="Enter your Bank Name"
                    name="Bank Name"
                    className="form-control"
                    id="Bank Name"
                    value={BankName}
                    onChange={(e) => setBankName(e.target.value)}
                />
                <br />

                <label htmlFor="Acc no">Acc Number</label>
                {/* Note that the htmlFor above doesn't match the id below. This means the label won't work as expected */}
                {/* You can also probably just use the `for` attribute instead of `htmlFor`, unless you have some JavaScript using it */}
                <input
                    type="text"
                    placeholder="Enter your Acc number"
                    name=" number"
                    className="form-control"
                    id="Acc number"
                    value={AccNumber}
                    onChange={(e) => setAccNumber(e.target.value)}
                />
                <br />

                <label htmlFor="items">Items</label>
                <input
                    type="text"
                    placeholder="Enter your Items"
                    id="items"
                    name="items"
                    className="form-control"
                    value={Items}
                    onChange={(e) => setItems(e.target.value)}
                />
                <br />
                <button type="submit" className="button"  onClick={handleSubmit}>Submit</button>

            </div>
      
        </div>
    );
}



export default Form;