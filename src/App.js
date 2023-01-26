import Accordion from "./components/Accordion"

function App() {
    const items = [
        {
            id: "hkjshf",
            label: "Can I use React on the project",
            content: "You can use React on any project you want",
        },
        {
            id: "fhdfjfkkdsljf",
            label: "Can I use JavaScript on the project",
            content: "You can use JS on any project you want",
        },
        {
            id: "fjlkfjs",
            label: "Can I use CSS on the project",
            content: "You can use CSS on any project you want",
        }
    ]

    return <div>
        <Accordion items={items} />
    </div>
}

export default App