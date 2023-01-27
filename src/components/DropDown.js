import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("click", handler, true)

        return () => {
            document.removeEventListener("click", handler)
        }
    }, [])

    const handleClick = function () {
        setIsOpen(!isOpen)
    }

    const handleClickOption = function (option) {
        // Close the drop
        setIsOpen(false)
        // what option did user select?
        onChange(option)
    }

    const renderedOption = options.map(option => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleClickOption(option)} key={option.value}>{option.label}</div>
    })

    return (<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer"
            onClick={handleClick}>{value?.label || "Selected..."}
            <GoChevronDown className="text-lg" /></Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOption}</Panel>}
    </div>)
}

export default DropDown