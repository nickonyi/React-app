import avatar from './assets/saric.jpeg'
const person = {
  name: 'Dario Saric',
  theme: {
    backgroundColor: 'green',
    color: 'red'
  }
};

export default function Avatar (){
    const avatarr = "./assets/saric.jpeg";
    const desc = "Gregorio Y. Zara";
    const name = "Dario Saric";
    
    return (
        <div style={person.theme}>
        <img
          className="avatar"
          src={avatar}
          alt={desc}
        />
        <div>{name} played a tremendous game today</div>
        </div>
        
      )
}