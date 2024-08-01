
import Proptypes from "prop-types"

function Student(props) {
    return (
        <div className="student">
            <p>Name : {props.name}
                <br />
                Age : {props.age}
                <br />
                Student : {props.isStudent ? "Yes" : "No"}
            </p>
        </div>
    );

}

Student.propTypes = {
    name : Proptypes.string,
    age : Proptypes.string,
    Student : Proptypes.bool
}

Student.defaultProps ={
    name : "Unknown",
    age : "No Details",
    isStudent : false
}

export default Student