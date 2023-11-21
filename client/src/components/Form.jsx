import React, { useEffect,useState } from "react";
import axios from "axios";
const Form = () => {

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