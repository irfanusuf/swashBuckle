

interface heroSectionInterface {
    username: string,
    age?: number
}


const HeroSection = ({ username }: heroSectionInterface) => {



    return (
        <div>
            <h2> This is a  HeroSection </h2>
            <h3> Welcome {username}</h3>
     
          
        </div>
    )
}

export default HeroSection