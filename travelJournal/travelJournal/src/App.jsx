import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App() {
    const testing = data.map(item => {
        return (
            <Card 
                {...item}
            />
        )
    })

return (
    <div>
        <Navbar />
        {testing}
    </div>
)
}