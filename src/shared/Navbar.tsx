

interface NavbarProps {
    username: string,
    profilePic: string
}


const Navbar = ({ username, profilePic }: NavbarProps) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }} >


            <div> <h3> Brand Name </h3> </div>

            <div>
                <ul style={{ display: "flex", alignItems: "center", listStyleType: "none", gap: "20px" }}>
                    <li>Shop</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <p> Welcome {username}</p>
                <img style={{ borderRadius: "50%" }} src={profilePic} alt={username} width={50} />
            </div>

        </div>
    )
}

export default Navbar