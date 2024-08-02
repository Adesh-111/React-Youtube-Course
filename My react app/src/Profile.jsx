function Profile(){
    const url = "https://media.licdn.com/dms/image/D5603AQFrOkf5Zas4Pw/profile-displayphoto-shrink_400_400/0/1713536629864?e=1727913600&v=beta&t=J39Z0NKDGqjaMot0V8O14zFqCI7rfKlsvrQeCB2lvYg";

    const handleClick = (e) => e.target.style.display = "none";
    

    return (
        <img src={url} alt=""  onClick={(e) => handleClick(e)}/>
    )
};

export default Profile;