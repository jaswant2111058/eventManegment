import { useState, useEffect } from "react"
import "./addevent.css"
import axios from "axios"



const AddEvent = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const [imgurl, setImgurl] = useState([])
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const baseURL = "http://localhost:5000"

    async function upload() {
        setIsLoading(true)
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile.files[0]);
        await axios.post(`${baseURL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${user.token}` 
            }
        }).then((res, err) => {
            if (err) {
                window.alert(err)
                setIsLoading(false)
            }
            else {
                setImgurl([...imgurl, res.data])
                setIsLoading(false)
            }
        })
    }

    useEffect(() => {
        let filledData = JSON.parse(localStorage.getItem("incomplete"))
        for (let key in filledData) {
            if (filledData.hasOwnProperty(key)) {
                document.querySelector(`.${key}`).value = filledData[key]
            }
        }
    }, [])

    function handleChange(e) {
        let data = formData
        data[e.target.name] = e.target.value
        setFormData(data)
        localStorage.setItem("incomplete", JSON.stringify(formData))
        console.log(formData)
    }
    let imgpreview = imgurl.map((id) => {
        return (
            <>
                <img className="priview" src={baseURL + `/img/${id}`} alt="img" />
            </>
        )
    })


   async function finalSubmit(){

    let data = {
        name:formData.name,
        venue:formData.venue,
        seats:{
            front:formData.front,
            middel:formData.middel,
            back:formData.back,
            normal:formData.normal,
            primium:formData.primium,
        },
        price:{
            front:formData.pricefront,
            middel:formData.pricemiddel,
            back:formData.priceback,
            normal:formData.pricenormal,
            primium:formData.priceprimium,
        },
        user_id:user.userid,
        title:formData.title,
        content:formData.content
    }
    await axios.post(`${baseURL}/addevent`,data, {
        headers: {
            'Content-Type': '"application/json',
            'Authorization': `${user.token}` 
        }
    }).then((res, err) => {
        if (err) {
            window.alert(err)
            setIsLoading(false)
        }
        else {
           window.alert(res.data.msg)
           localStorage.removeItem("incomplete")
        }
    })

    }

    return (
        <>
            <div className="mainadd">
                <div className="lefthalf">
                    <div className="detail">
                        <h3>Name Of Event</h3>
                        <input className="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                        />

                        <h3>Date</h3>
                        <input className="date"
                            name="date"
                            type="date"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            required
                        />

                        <h3>Time</h3>
                        <input className="time"
                            name="time"
                            type="time"
                            placeholder="Enter the time"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <h3>Enter Seat Details</h3>

                    <div className="definetag">
                        <h3>Seat Type</h3>
                        <h3>Price</h3>
                    </div>
                    <div className="seat">
                        <div className="seattype">
                            <h3>Front</h3>
                            <h3>middel</h3>
                            <h3>Back</h3>
                            <h3>Normal</h3>
                            <h3>primium</h3>
                        </div>
                        <div className="seatinput">
                            <input className="fronts"
                                name="fronts"
                                type="string"
                                placeholder="Enter the fronts"
                                onChange={handleChange}
                                required
                            />

                            <input className="middel"
                                name="middel"
                                type="string"
                                placeholder="Enter the middel"
                                onChange={handleChange}
                                required

                            />

                            <input className="back"
                                name="back"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />

                            <input className="normal"
                                name="normal"
                                type="string"
                                placeholder="Enter the normal"
                                onChange={handleChange}
                                required

                            />

                            <input className="primium"
                                name="primium"
                                type="string"
                                placeholder="Enter the primium"
                                onChange={handleChange}
                                required

                            />
                        </div>
                        <div className="price">

                            <input className="pricefronts"
                                name="pricefronts"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />
                            <input className="pricemiddel"
                                name="pricemiddel"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />
                            <input className="priceback"
                                name="priceback"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />
                            <input className="pricenormal"
                                name="pricenormal"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />
                            <input className="priceprimium"
                                name="priceprimium"
                                type="string"
                                placeholder="Enter the back"
                                onChange={handleChange}
                                required

                            />

                        </div>

                    </div>
                </div>

                <div className="rigthhalf">
                    <h3>Title</h3>
                    <input className="title"
                        name="title"
                        type="string"
                        placeholder="Enter the Title"
                        onChange={handleChange}
                        required
                    />
                    <h3>Content</h3>
                    <textarea className="content"
                        name="content"
                        type="string"
                        placeholder="Enter the content"
                        onChange={handleChange}
                        required
                    />
                    <h3>Upload Images</h3>
                    <input className="file"
                        id="file"
                        name="image"
                        type="file"
                        accept="image/*"
                        placeholder="Enter the content"
                        required
                    />
                    <input type="submit" onClick={upload} />
                    <div className="imgpreview">
                        {imgpreview}
                    </div>
                </div>
               </div>
               <input type="submit" onClick={finalSubmit} />
        </>
    )

}
export default AddEvent
