import UdemyCard from "./UdemyCard"
import udemy_img1 from "../images/udemy_img1.png"
import udemy_img2 from "../images/udemy_img2.png"
import udemy_img3 from "../images/udemy_img3.png"

const Udemy = () => {
    return (
        <div className="container">
            <UdemyCard
            image = {udemy_img1}
            title1 = "The Complete 2022 Web Development Bootcamp" 
            author1 ="Dr. Angela Yu"
            viewers = "224,949"
            newPrice ="19.99"
            oldPrice ="69.99"
            />
            <UdemyCard 
            image = {udemy_img2}
            title2 = "100 Days of Code: The Complete Python Pro Bootcamp for 2022"
            author2 ="Dr. Angela Yu"
            viewers = "139,610"
            newPrice ="17.99"
            oldPrice ="59.99"
            />
            <UdemyCard 
            image = {udemy_img3}
            title3 = "Ultimate AWS Certifies Solutions Architect Associate..."
            author3 ="Stephane Maarek | AWS Certified Cloud Pra..."
            viewers = "145,685"
            newPrice ="17.99"
            oldPrice ="59.99"
            />
        </div>
    )
}

export default Udemy;