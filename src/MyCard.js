import React from "react"
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,FaPhone,FaCalendarAlt} from "react-icons/fa"
const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large} alt="anyperson"/>
               <CardTitle className="text-primary">
                <h1>
                    <span className="pr-2">
                        {details.name?.title}
                    </span>
                    <span>
                    {details.name?.first}
                    </span>
                    <span>
                    {details.name?.last}
                    </span>
                    
                </h1>
               </CardTitle>
               <CardText>
                    <h4>
                    <FaMapMarkedAlt  className="pr-2" />
                    {details.location?.city}
                    </h4>
                    <h4>
                    <FaPhone className="pr-2" />
                    {details.phone}
                    </h4>
                    <h4>
                    <FaEnvelope className="pr-2" />
                    {details.email}
                    </h4>
                    <h4>
                    <FaCalendarAlt className="pr-2"/>
                    {details.dob?.age}
                    </h4>
               </CardText>
            </CardBody>
        </Card>
    )

}
export default MyCard